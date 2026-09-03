import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Share2, Download, QrCode } from 'lucide-react';
import { generateQRCodeMatrix } from '../utils/qr';

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
};

export default function ShareModal({
  isOpen,
  onClose,
  url = 'https://my-portfolio-nj9s.vercel.app/',
  title = 'NileDex | Joseph Akpan Sunday Portfolio',
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const qrMatrix = useMemo(() => {
    try {
      return generateQRCodeMatrix(url);
    } catch {
      return generateQRCodeMatrix('https://my-portfolio-nj9s.vercel.app/');
    }
  }, [url]);


  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Copy URL to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Native Web Share API
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: 'Check out Joseph Akpan Sunday (NileDex) portfolio',
          url,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  // Download QR Code as Image
  const handleDownloadQR = () => {
    const matrix = qrMatrix;
    const size = matrix.length;
    const scale = 12;
    const margin = 24;
    const canvas = document.createElement('canvas');
    canvas.width = size * scale + margin * 2;
    canvas.height = size * scale + margin * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Modules
    ctx.fillStyle = '#050505';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (matrix[r][c]) {
          ctx.fillRect(margin + c * scale, margin + r * scale, scale, scale);
        }
      }
    }

    const a = document.createElement('a');
    a.download = 'niledex-portfolio-qr.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="share-modal-dark glass-card relative z-10 w-full max-w-sm sm:max-w-md overflow-hidden p-6 sm:p-8 bg-[#0e0e0e] border border-white/15 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                  <QrCode className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-none">Share Portfolio</h3>
                  <p className="mt-1 text-[11px] font-mono text-zinc-400">Scan QR or copy link</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative rounded-2xl bg-white p-4 shadow-xl">
                <svg
                  viewBox={`0 0 ${qrMatrix.length} ${qrMatrix.length}`}
                  className="h-48 w-48 sm:h-56 sm:w-56"
                  shapeRendering="crispEdges"
                >
                  {qrMatrix.map((row, r) =>
                    row.map((cell, c) =>
                      cell ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#0A0A0A" /> : null
                    )
                  )}
                </svg>
              </div>

              <p className="mt-4 text-xs text-zinc-400 font-mono text-center">
                Scan with your phone camera to view
              </p>
            </div>

            {/* Copy Link Input Bar */}
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1.5 pl-3">
              <span className="flex-1 truncate text-xs font-mono text-zinc-300 select-all">
                {url}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black transition-transform active:scale-95 cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-black" />
                    <span className="text-black">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleNativeShare}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5 text-white" />
                <span className="text-white">Share</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadQR}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-white" />
                <span className="text-white">Download</span>
              </button>
            </div>

            <canvas ref={canvasRef} className="hidden" />
          </motion.div>


        </div>
      )}
    </AnimatePresence>
  );
}

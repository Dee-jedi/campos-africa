import React from "react";
import Image from "next/image";
import { FOOTER_LINKS, APP_URLS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-campos-navy text-white pt-16 pb-12 border-t border-slate-800">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/icon.png"
                  alt="Campos logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-geist text-2xl font-black tracking-tight text-white">
                Campos
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm mb-4 leading-relaxed">
              The #1 Academic & Lifestyle Super-App for African University Students. Built to help students ace their exams, buy and sell safely, and connect with their campus community.
            </p>
            <p className="text-xs text-campos-accent font-semibold italic mb-6">
              &quot;If it&apos;s on campus, it&apos;s on Campos.&quot;
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={APP_URLS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-btn bg-white text-campos-navy font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.92L3 21.2v-18.4l.001-.066c.036-.34.22-.656.608-.92zM15.207 13.414l2.553 2.554-11.458 6.505 8.905-9.059zm0-2.828l-8.905-9.06 11.458 6.506-2.553 2.554zm1.414 1.414l3.528 2.003c.895.508.895 1.336 0 1.844l-3.528 2.003-2.122-2.122 2.122-2.128z" />
                </svg>
                <span>Play Store</span>
              </a>
              <a
                href={APP_URLS.webApp}
                className="px-3.5 py-2 rounded-btn bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors border border-white/10"
              >
                Launch Web App
              </a>
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="font-geist text-sm font-bold text-white uppercase tracking-wider mb-4">
              Study Hub
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {FOOTER_LINKS.academic.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-campos-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace Links */}
          <div>
            <h4 className="font-geist text-sm font-bold text-white uppercase tracking-wider mb-4">
              Marketplace
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {FOOTER_LINKS.marketplace.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-campos-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <h4 className="font-geist text-sm font-bold text-white uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-campos-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Campos Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-slate-200 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-slate-200 transition-colors">Terms</a>
            <a href={`mailto:${APP_URLS.supportEmail}`} className="hover:text-slate-200 transition-colors">
              {APP_URLS.supportEmail}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

"use client";
import React from "react";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">
          Direct Channels
        </h3>
        <ul className="space-y-6">
          <li>
            <a
              href="mailto:hello@zentari.com"
              className="group flex items-start gap-4 hover:opacity-75 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-slate-900 font-medium">
                  Email Us
                </span>
                <span className="block text-slate-500 text-sm">
                  hello@zentari.com
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="tel:+6300000000000"
              className="group flex items-start gap-4 hover:opacity-75 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-slate-900 font-medium">
                  Text / Call
                </span>
                <span className="block text-slate-500 text-sm">
                  +63 (000) 000-0000
                </span>
              </div>
            </a>
          </li>
          <li>
            <div className="group flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-slate-900 font-medium">
                  Messaging Apps
                </span>
                <span className="block text-slate-500 text-sm">
                  Telegram, WhatsApp, Viber available upon request.
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="pt-10 border-t border-slate-100">
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">
          Global HQ
        </h3>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-slate-900 font-medium mb-1">
              Manila, Philippines
            </span>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              We are a remote-first team serving clients across North America,
              Europe, and Asia-Pacific.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

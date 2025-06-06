"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

interface WhatsAppLayoutProps {
  children: React.ReactNode;
}

export default function WhatsAppLayout({ children }: WhatsAppLayoutProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/917623043499?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    New Journey Immigration
                  </h1>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Online • Ready to help
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href="tel:+917623043499"
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@newjourneyimmigration.com"
                className="p-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">WhatsApp Chat</h2>
              <p className="opacity-90">Get instant support for your immigration needs</p>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-6">
            {children}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  rows={3}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="p-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Speak directly with our experts
            </p>
            <a
              href="tel:+917623043499"
              className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Chat with us instantly
            </p>
            <a
              href="https://wa.me/917623043499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Send us detailed queries
            </p>
            <a
              href="mailto:info@newjourneyimmigration.com"
              className="inline-flex items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

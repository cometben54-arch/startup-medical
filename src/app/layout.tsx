"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import AdminPanel from "@/components/Admin/AdminPanel";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="zh-CN">
      <head>
        <title>南斗医药 | Nandou Pharmaceutical - 全球核素核药研发生产与临床供应链一体化服务</title>
        <meta name="description" content="南斗医药是专注于全球核素核药研发生产与临床供应链一体化服务的专业服务商，聚焦核素供应、核药采购、临床对照药采购、Depot全流程管理四大核心业务。" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
          <AdminPanel />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";


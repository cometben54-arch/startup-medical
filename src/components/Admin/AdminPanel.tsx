"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "wangbo";
const STORAGE_KEY = "nandou-admin-content";

interface EditableField {
  key: string;
  label: string;
  value: string;
}

const defaultFields: EditableField[] = [
  { key: "hotline", label: "服务热线 Hotline", value: "400-XXX-XXXX" },
  { key: "headquarters", label: "总部地址 HQ Address", value: "北京市" },
  { key: "nuclideCenterAddress", label: "核素核药中心 Nuclide Center", value: "成都" },
  { key: "businessEmail", label: "商务邮箱 Business Email", value: "business@nandoupharma.com" },
  { key: "nuclearEmail", label: "核素咨询邮箱 Nuclear Email", value: "nuclear@nandoupharma.com" },
  { key: "heroTitleZh", label: "首页标题(中)", value: "南斗医药 — 全球核素核药研发生产与临床供应链一体化服务" },
  { key: "heroTitleEn", label: "首页标题(EN)", value: "Nandou Pharmaceutical — Integrated R&D, Production & Clinical Supply Chain Services for Global Nuclides and Radiopharmaceuticals" },
  { key: "heroDescZh", label: "首页描述(中)", value: "聚焦核素供应、核药采购、临床对照药采购、Depot全流程管理四大核心业务，覆盖药品从早期开发、临床供应到商业化配送的全生命周期。" },
  { key: "heroDescEn", label: "首页描述(EN)", value: "Focusing on four core businesses: nuclide supply, radiopharmaceutical procurement, clinical reference drug procurement, and full-process Depot management, covering the entire life cycle from early development and clinical supply to commercial distribution." },
];

export function useAdminContent() {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setContent(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const get = (key: string, fallback: string) => {
    return content[key] || fallback;
  };

  return { get };
}

const AdminPanel = () => {
  const [isGearVisible, setIsGearVisible] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [fields, setFields] = useState<EditableField[]>(defaultFields);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setFields(
          defaultFields.map((f) => ({
            ...f,
            value: parsed[f.key] || f.value,
          }))
        );
      }
    } catch {}
  }, []);

  const handleGearClick = () => {
    setShowPasswordModal(true);
    setPassword("");
    setPasswordError(false);
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setShowPasswordModal(false);
      setShowEditor(true);
    } else {
      setPasswordError(true);
    }
  };

  const handleFieldChange = (key: string, value: string) => {
    setFields((prev) =>
      prev.map((f) => (f.key === key ? { ...f, value } : f))
    );
    setSaved(false);
  };

  const handleSave = () => {
    const data: Record<string, string> = {};
    fields.forEach((f) => {
      data[f.key] = f.value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    // Reload page to apply changes
    window.location.reload();
  };

  const handleClose = () => {
    setShowEditor(false);
  };

  return (
    <>
      {/* Gear Button - fixed bottom right */}
      {isGearVisible && !showEditor && (
        <button
          onClick={handleGearClick}
          className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 text-white shadow-lg transition hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400"
          aria-label="Admin Settings"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-gray-dark">
            <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
              管理员验证 Admin Auth
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              placeholder="请输入管理员密码"
              className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-primary dark:border-gray-600 dark:bg-[#2C303B] dark:text-white"
              autoFocus
            />
            {passwordError && (
              <p className="mb-3 text-sm text-red-500">密码错误 Wrong password</p>
            )}
            <div className="flex gap-3">
              <button
                onClick={handlePasswordSubmit}
                className="rounded bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                确认 Confirm
              </button>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="rounded bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-white"
              >
                取消 Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editor Panel */}
      {showEditor && (
        <div className="fixed inset-0 z-[99999] overflow-y-auto bg-black/50">
          <div className="mx-auto my-8 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-dark">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black dark:text-white">
                网站内容管理 Content Management
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {fields.map((field) => (
                <div key={field.key}>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                  </label>
                  {field.value.length > 60 ? (
                    <textarea
                      value={field.value}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      rows={3}
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary dark:border-gray-600 dark:bg-[#2C303B] dark:text-white"
                    />
                  ) : (
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary dark:border-gray-600 dark:bg-[#2C303B] dark:text-white"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleSave}
                className="rounded bg-primary px-8 py-2 text-base font-medium text-white hover:bg-primary/90"
              >
                保存并刷新 Save & Reload
              </button>
              <button
                onClick={handleClose}
                className="rounded bg-gray-200 px-8 py-2 text-base font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-white"
              >
                关闭 Close
              </button>
              {saved && (
                <span className="text-sm text-green-500">已保存 Saved!</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;

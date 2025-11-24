import { useState, useEffect } from "react";
import type { ExportWordHeadersFootersConfig } from "../types/headerFooter";
import "./HeaderFooterConfigurator.css";

interface HeaderFooterConfiguratorProps {
  config: ExportWordHeadersFootersConfig;
  onSave: (config: ExportWordHeadersFootersConfig) => void;
  onClose: () => void;
}

export default function HeaderFooterConfigurator({
  config,
  onSave,
  onClose,
}: HeaderFooterConfiguratorProps) {
  const [localConfig, setLocalConfig] =
    useState<ExportWordHeadersFootersConfig>(config);

  useEffect(() => {
    setLocalConfig(config);
  }, [config]);

  const updateConfig = (
    type: "headers" | "footers",
    position: "default" | "first" | "odd" | "even",
    field: "html" | "css",
    value: string
  ) => {
    setLocalConfig((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [position]: {
          ...prev[type]?.[position],
          [field]: value,
        },
      },
    }));
  };

  const handleSave = () => {
    onSave(localConfig);
    onClose();
  };

  const insertPageNumber = (
    type: "headers" | "footers",
    position: "default" | "first" | "odd" | "even"
  ) => {
    const currentHtml = localConfig[type]?.[position]?.html || "";
    const newHtml = `${currentHtml}<span class="pageNumber"></span>`;
    updateConfig(type, position, "html", newHtml);
  };

  const insertTotalPages = (
    type: "headers" | "footers",
    position: "default" | "first" | "odd" | "even"
  ) => {
    const currentHtml = localConfig[type]?.[position]?.html || "";
    const newHtml = `${currentHtml}<span class="totalPages"></span>`;
    updateConfig(type, position, "html", newHtml);
  };

  const renderSection = (type: "headers" | "footers", label: string) => (
    <div className="header-footer-section">
      <h3>{label}</h3>
      {(["default", "first", "odd", "even"] as const).map((position) => (
        <div key={position} className="header-footer-item">
          <div className="header-footer-item-header">
            <h4>{position.charAt(0).toUpperCase() + position.slice(1)} Page</h4>
            <div className="header-footer-insert-buttons">
              <button
                type="button"
                className="ck-button ck-button-save"
                onClick={() => insertPageNumber(type, position)}
                title="Insert page number"
              >
                Insert Page #
              </button>
              <button
                type="button"
                className="ck-button ck-button-save"
                onClick={() => insertTotalPages(type, position)}
                title="Insert total pages"
              >
                Insert Total Pages
              </button>
            </div>
          </div>
          <div className="header-footer-fields">
            <div className="header-footer-field">
              <label>
                HTML Content <span className="required">*</span>
                <textarea
                  value={localConfig[type]?.[position]?.html || ""}
                  onChange={(e) =>
                    updateConfig(type, position, "html", e.target.value)
                  }
                  placeholder={`<p>${label.slice(
                    0,
                    -1
                  )} content for ${position} page</p>`}
                  rows={3}
                />
              </label>
            </div>
            <div className="header-footer-field">
              <label>
                CSS Styles (optional)
                <textarea
                  value={localConfig[type]?.[position]?.css || ""}
                  onChange={(e) =>
                    updateConfig(type, position, "css", e.target.value)
                  }
                  placeholder="p { color: #333; font-size: 12px; }"
                  rows={2}
                />
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="header-footer-configurator-overlay" onClick={onClose}>
      <div
        className="header-footer-configurator-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header-footer-configurator-header">
          <h2>Configure Headers and Footers</h2>
          <button
            type="button"
            className="ck-button ck-button-cancel"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="header-footer-configurator-content">
          <div className="header-footer-info">
            <p>
              Configure headers and footers for Word export. Use{" "}
              <code>&lt;span class="pageNumber"&gt;&lt;/span&gt;</code> for page
              numbers and{" "}
              <code>&lt;span class="totalPages"&gt;&lt;/span&gt;</code> for
              total pages.
            </p>
          </div>
          {renderSection("headers", "Headers")}
          {renderSection("footers", "Footers")}
        </div>
        <div className="header-footer-configurator-footer">
          <button
            type="button"
            className="ck-button ck-button-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="ck-button ck-button-save"
            onClick={handleSave}
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}

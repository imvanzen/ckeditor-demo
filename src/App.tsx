/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoBgNARATAdAHDAjBSi5QOyJGgzAFgFZ8BOQ3XANkVMMSnwwzkpMRo0o10Vwyh6JybKCggBTAHYpcYYIjALwCpQF1IlACYBjTSFwAjCKqA==
 */

import { useState, useEffect, useRef, useMemo, type RefObject } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  DecoupledEditor,
  Alignment,
  AutoImage,
  Autoformat,
  AutoLink,
  Autosave,
  BalloonToolbar,
  ImageBlock,
  Bold,
  Bookmark,
  CKBox,
  CKBoxImageEdit,
  CloudServices,
  Code,
  Emoji,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Fullscreen,
  Heading,
  HorizontalLine,
  ImageCaption,
  ImageEditing,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  ImageUtils,
  ImageInline,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
} from "ckeditor5";
import type { EditorConfig } from "ckeditor5";
import {
  CaseChange,
  Comments,
  DocumentOutline,
  ExportPdf,
  ExportWord,
  Footnotes,
  FormatPainter,
  ImportWord,
  LineHeight,
  MergeFields,
  MultiLevelList,
  Pagination,
  PasteFromOfficeEnhanced,
  PresenceList,
  RealTimeCollaborativeComments,
  RealTimeCollaborativeEditing,
  RealTimeCollaborativeRevisionHistory,
  RealTimeCollaborativeTrackChanges,
  RevisionHistory,
  SlashCommand,
  TableOfContents,
  Template,
  TrackChanges,
  TrackChangesData,
  TrackChangesPreview,
} from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

import "./App.css";

const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY;

/**
 * Unique ID that will be used to identify this document. E.g. you may use ID taken from your database.
 * Read more: https://ckeditor.com/docs/ckeditor5/latest/api/module_collaboration-core_config-RealTimeCollaborationConfig.html
 */
const DOCUMENT_ID = import.meta.env.VITE_DOCUMENT_ID;

const CLOUD_SERVICES_TOKEN_URL =
  "https://hr7dzn9s9x8n.cke-cs.com/token/dev/b506ecdf39fa7aeec8c0427c139a3780671820e2cc29731abd7373070fad?limit=10";
const CLOUD_SERVICES_WEBSOCKET_URL = "wss://hr7dzn9s9x8n.cke-cs.com/ws";

export default function App() {
  const editorPresenceRef = useRef<HTMLElement | null>(null);
  const editorContainerRef = useRef(null);
  const editorMenuBarRef = useRef<HTMLElement | null>(null);
  const editorToolbarRef = useRef<HTMLElement | null>(null);
  const editorOutlineRef = useRef<HTMLElement | null>(null);
  const editorRef = useRef<HTMLElement | null>(null);
  const editorAnnotationsRef = useRef<HTMLElement | null>(null);
  const editorRevisionHistoryRef = useRef<HTMLElement | null>(null);
  const editorRevisionHistoryEditorRef = useRef<HTMLElement | null>(null);
  const editorRevisionHistorySidebarRef = useRef<HTMLElement | null>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "previousPage",
            "nextPage",
            "|",
            "revisionHistory",
            "trackChanges",
            "comment",
            "|",
            "insertMergeField",
            "previewMergeFields",
            "|",
            "formatPainter",
            "|",
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "insertImage",
            "insertTable",
            "|",
            "alignment",
            "lineHeight",
            "|",
            "bulletedList",
            "numberedList",
            "multiLevelList",
            "todoList",
            "outdent",
            "indent",
            "|",
            "pageBreak",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          Alignment,
          Autoformat,
          AutoImage,
          AutoLink,
          Autosave,
          BalloonToolbar,
          Bold,
          Bookmark,
          CaseChange,
          CKBox,
          CKBoxImageEdit,
          CloudServices,
          Code,
          Comments,
          DocumentOutline,
          Emoji,
          Essentials,
          ExportPdf,
          ExportWord,
          FindAndReplace,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Footnotes,
          FormatPainter,
          Fullscreen,
          Heading,
          HorizontalLine,
          ImageBlock,
          ImageCaption,
          ImageEditing,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          ImageUtils,
          ImportWord,
          Indent,
          IndentBlock,
          Italic,
          LineHeight,
          Link,
          LinkImage,
          List,
          ListProperties,
          Mention,
          MergeFields,
          MultiLevelList,
          PageBreak,
          Pagination,
          Paragraph,
          PasteFromOffice,
          PasteFromOfficeEnhanced,
          PictureEditing,
          PresenceList,
          RealTimeCollaborativeComments,
          RealTimeCollaborativeEditing,
          RealTimeCollaborativeRevisionHistory,
          RealTimeCollaborativeTrackChanges,
          RemoveFormat,
          RevisionHistory,
          SlashCommand,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableOfContents,
          TableProperties,
          TableToolbar,
          Template,
          TextTransformation,
          TodoList,
          TrackChanges,
          TrackChangesData,
          TrackChangesPreview,
          Underline,
        ],
        balloonToolbar: [
          "comment",
          "|",
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "|",
          "bulletedList",
          "numberedList",
        ],
        cloudServices: {
          tokenUrl: CLOUD_SERVICES_TOKEN_URL,
          webSocketUrl: CLOUD_SERVICES_WEBSOCKET_URL,
        },
        collaboration: {
          channelId: DOCUMENT_ID,
        },
        comments: {
          editorConfig: {
            extraPlugins: [Autoformat, Bold, Italic, List, Mention],
            mention: {
              feeds: [
                {
                  marker: "@",
                  feed: [
                    /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#comments-with-mentions */
                  ],
                },
              ],
            },
          },
        },
        documentOutline: {
          container: editorOutlineRef.current,
        },
        exportPdf: {
          stylesheets: [
            /* This path should point to the content stylesheets on your assets server. */
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
            "./export-style.css",
            /* Export PDF needs access to stylesheets that style the content. */
            "https://cdn.ckeditor.com/ckeditor5/47.2.0/ckeditor5.css",
            "https://cdn.ckeditor.com/ckeditor5-premium-features/47.2.0/ckeditor5-premium-features.css",
          ],
          fileName: "export-pdf-demo.pdf",
          converterOptions: {
            format: "A4",
            margin_top: "20mm",
            margin_bottom: "20mm",
            margin_right: "12mm",
            margin_left: "12mm",
            page_orientation: "portrait",
          },
        },
        exportWord: {
          stylesheets: [
            /* This path should point to the content stylesheets on your assets server. */
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
            "./export-style.css",
            /* Export Word needs access to stylesheets that style the content. */
            "https://cdn.ckeditor.com/ckeditor5/47.2.0/ckeditor5.css",
            "https://cdn.ckeditor.com/ckeditor5-premium-features/47.2.0/ckeditor5-premium-features.css",
          ],
          fileName: "export-word-demo.docx",
          converterOptions: {
            document: {
              orientation: "portrait",
              size: "A4",
              margins: {
                top: "20mm",
                bottom: "20mm",
                right: "12mm",
                left: "12mm",
              },
            },
          },
        },
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22],
          supportAllValues: true,
        },
        fullscreen: {
          onEnterCallback: (container: HTMLElement) =>
            container.classList.add(
              "editor-container",
              "editor-container_document-editor",
              "editor-container_include-outline",
              "editor-container_include-annotations",
              "editor-container_include-pagination",
              "editor-container_include-fullscreen",
              "main-container"
            ),
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
            "|",
            "ckboxImageEdit",
          ],
        },
        initialData:
          '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
        licenseKey: LICENSE_KEY,
        lineHeight: {
          supportAllValues: true,
        },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        mention: {
          feeds: [
            {
              marker: "@",
              feed: [
                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
              ],
            },
          ],
        },
        mergeFields: {
          /* Read more: https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html#configuration */
        },
        pagination: {
          pageWidth: "210mm",
          pageHeight: "297mm",
          pageMargins: {
            top: "20mm",
            right: "20mm",
            bottom: "25mm",
            left: "20mm",
          },
        },
        placeholder: "Type or paste your content here!",
        presenceList: {
          container: editorPresenceRef.current,
        },
        revisionHistory: {
          editorContainer: editorContainerRef.current,
          viewerContainer: editorRevisionHistoryRef.current,
          viewerEditorElement: editorRevisionHistoryEditorRef.current,
          viewerSidebarContainer: editorRevisionHistorySidebarRef.current,
          resumeUnsavedRevision: true,
        },
        sidebar: {
          container: editorAnnotationsRef.current,
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
        template: {
          definitions: [
            {
              title: "Introduction",
              description: "Simple introduction to an article",
              icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dx="1" dy="1"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>\n',
              data: "<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>",
            },
          ],
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="main-container">
      <div
        className="presence"
        ref={editorPresenceRef as RefObject<HTMLDivElement>}
      ></div>
      <div
        className="editor-container editor-container_document-editor editor-container_include-outline editor-container_include-annotations editor-container_include-pagination editor-container_include-fullscreen"
        ref={editorContainerRef}
      >
        <div
          className="editor-container__menu-bar"
          ref={editorMenuBarRef as RefObject<HTMLDivElement>}
        ></div>
        <div
          className="editor-container__toolbar"
          ref={editorToolbarRef as RefObject<HTMLDivElement>}
        ></div>
        <div className="editor-container__editor-wrapper">
          <div
            className="editor-container__sidebar"
            ref={editorOutlineRef as RefObject<HTMLDivElement>}
          ></div>
          <div className="editor-container__editor">
            <div ref={editorRef as RefObject<HTMLDivElement>}>
              {editorConfig && (
                <CKEditor
                  onReady={(editor) => {
                    editorToolbarRef.current?.appendChild(
                      editor.ui.view.toolbar.element as Node
                    );
                    editorMenuBarRef.current?.appendChild(
                      editor.ui.view.menuBarView.element as Node
                    );
                  }}
                  onAfterDestroy={() => {
                    Array.from(
                      editorToolbarRef.current?.children || []
                    ).forEach((child) => child.remove());
                    Array.from(
                      editorMenuBarRef.current?.children || []
                    ).forEach((child) => child.remove());
                  }}
                  editor={DecoupledEditor}
                  config={editorConfig as unknown as EditorConfig}
                />
              )}
            </div>
          </div>
          <div
            className="editor-container__sidebar"
            ref={editorAnnotationsRef as RefObject<HTMLDivElement>}
          ></div>
        </div>
      </div>
      <div
        className="revision-history"
        ref={editorRevisionHistoryRef as RefObject<HTMLDivElement>}
      >
        <div className="revision-history__wrapper">
          <div
            className="revision-history__editor"
            ref={editorRevisionHistoryEditorRef as RefObject<HTMLDivElement>}
          ></div>
          <div
            className="revision-history__sidebar"
            ref={editorRevisionHistorySidebarRef as RefObject<HTMLDivElement>}
          ></div>
        </div>
      </div>
    </div>
  );
}

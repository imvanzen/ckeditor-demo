import { Plugin } from "ckeditor5";
import { ButtonView } from "ckeditor5";

export default class HeaderFooterPlugin extends Plugin {
  public static get pluginName() {
    return "HeaderFooter";
  }

  init() {
    const editor = this.editor;

    // Register the toolbar button
    editor.ui.componentFactory.add("headerFooter", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Headers & Footers",
        tooltip: true,
        withText: true,
        class: "ck-header-footer-button",
      });

      // Listen to button click
      view.on("execute", () => {
        // Dispatch a custom event on the document that React can listen to
        const event = new CustomEvent("openHeaderFooterConfig", {
          bubbles: true,
        });
        document.dispatchEvent(event);
      });

      return view;
    });
  }
}

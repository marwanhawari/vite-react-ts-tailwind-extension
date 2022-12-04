async function main() {
    let reactRoot = document.createElement("div");
    reactRoot.setAttribute("id", "extension-root");

    await timeout(2000);

    const mainContentContainer = document.querySelector("body");

    if (!mainContentContainer) {
        return;
    }

    mainContentContainer.prepend(reactRoot);

    // Inject the React application
    const src = chrome.runtime.getURL("assets/index.js");
    await import(src);
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

main();

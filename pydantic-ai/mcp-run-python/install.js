import { loadPyodide } from "npm:pyodide"

async function install() {
    const pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    await pyodide.runPythonAsync(`
        import micropip
        await micropip.install([k for k, v in micropip._compat.REPODATA_PACKAGES.items() if v["imports"]])
    `);
}

install();

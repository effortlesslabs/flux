import { useHotkeys } from "react-hotkeys-hook";
import { getPlatformModifierKey, getPlatformModifierKeyText } from "../utils/platform";
import { HOTKEY_CONFIG } from "../utils/constants";

function useFluxHotKeys() {
  const modifierKey = getPlatformModifierKey();
  const modifierKeyText = getPlatformModifierKeyText();

  const save = () => {};

  useHotkeys(`${modifierKey}+s`, save, HOTKEY_CONFIG);

  // useHotkeys(
  //   `${modifierKey}+p`,
  //   () => newConnectedToSelectedNode(FluxNodeType.User),
  //   HOTKEY_CONFIG
  // );
  // useHotkeys(
  //   `${modifierKey}+u`,
  //   () => newConnectedToSelectedNode(FluxNodeType.System),
  //   HOTKEY_CONFIG
  // );

  // useHotkeys(
  //   `${modifierKey}+shift+p`,
  //   () => newUserNodeLinkedToANewSystemNode(),
  //   HOTKEY_CONFIG
  // );

  // useHotkeys(`${modifierKey}+.`, trackedAutoZoom, HOTKEY_CONFIG);
  // useHotkeys(
  //   `${modifierKey}+/`,
  //   () => {
  //     onToggleSettingsModal();

  //     if (MIXPANEL_TOKEN) mixpanel.track("Toggled settings modal");
  //   },
  //   HOTKEY_CONFIG
  // );
  // useHotkeys(`${modifierKey}+shift+backspace`, onClear, HOTKEY_CONFIG);

  // useHotkeys(`${modifierKey}+z`, undo, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+shift+z`, redo, HOTKEY_CONFIG);

  // useHotkeys(`${modifierKey}+e`, showRenameInput, HOTKEY_CONFIG);

  // useHotkeys(`${modifierKey}+up`, moveToParent, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+down`, moveToChild, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+left`, moveToLeftSibling, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+right`, moveToRightSibling, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+return`, () => submitPrompt(false), HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+shift+return`, () => submitPrompt(true), HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+k`, completeNextWords, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+backspace`, deleteSelectedNodes, HOTKEY_CONFIG);
  // useHotkeys(`${modifierKey}+shift+c`, copyMessagesToClipboard, HOTKEY_CONFIG);
}

export default useFluxHotKeys;

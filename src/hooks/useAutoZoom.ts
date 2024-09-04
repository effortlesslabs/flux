import { useCallback } from "react";
import { useReactFlow } from "reactflow";
import { FIT_VIEW_SETTINGS } from "../utils/constants";
import { useSettingsStore } from "../zustand/settings";

function useAutoZoom() {
  const { setViewport, fitView } = useReactFlow();
  const settings = useSettingsStore();

  const autoZoom = useCallback(() => {
    setTimeout(() => fitView(FIT_VIEW_SETTINGS), 50);
  }, [fitView]);

  const autoZoomIfNecessary = useCallback(() => {
    if (settings.autoZoom) autoZoom();
  }, []);

  return { setViewport, autoZoom, autoZoomIfNecessary };
}

export default useAutoZoom;

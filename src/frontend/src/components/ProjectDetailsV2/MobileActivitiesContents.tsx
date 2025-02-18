import React from 'react';
import ActivitiesPanel from '@/components/ProjectDetailsV2/ActivitiesPanel';
import CoreModules from '@/shared/CoreModules';
import { useAppSelector } from '@/types/reduxTypes';

const MobileActivitiesContents = ({ map, mainView, mapDivPostion }) => {
  const params = CoreModules.useParams();
  const state = useAppSelector((state) => state.project);
  const defaultTheme = useAppSelector((state) => state.theme.hotTheme);

  return (
    <div className="fmtm-w-full fmtm-bg-white fmtm-mb-[12vh]">
      <CoreModules.Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <ActivitiesPanel
          params={params}
          state={state.projectTaskBoundries}
          defaultTheme={defaultTheme}
          map={map}
          view={mainView}
          mapDivPostion={mapDivPostion}
          states={state}
        />
      </CoreModules.Stack>
    </div>
  );
};

export default MobileActivitiesContents;

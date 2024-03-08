import { create } from 'zustand'

const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  circles:[],
  res:[
      {
          "iri": "Project 1",
          'lat': 55.672278,
          'lng': 12.5785,
      },
      {
          "iri": "Project 2",
          'lat': 55.6273872,
          'lng': 12.579409,
      },
  ],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: false,
  project:[
    {
        "iri": "http://example.com/buildings/BB/ESP4",
        "label": "Replacement of light bulbs on the back stairs and in the basement",
        "investment": "1000",
        "calculatedAnnualSavings": "2800",
        "simpleRepaymentPeriod": "0.4"
    },
    {
        "iri": "http://example.com/buildings/BB/ESP1",
        "label": "Re-insulation of floor towards the outside",
        "investment": "23400",
        "calculatedAnnualSavings": "1600",
        "simpleRepaymentPeriod": "15"
    },
    {
        "iri": "http://example.com/buildings/BB/ESP2",
        "label": "Re-insulation of hot water risers",
        "investment": "19200",
        "calculatedAnnualSavings": "5600",
        "simpleRepaymentPeriod": "3.5"
    },
    {
        "iri": "http://example.com/buildings/BB/ESP3",
        "label": "Re-insulation of molded floor covering against unheated basement",
        "investment": "236000",
        "calculatedAnnualSavings": "6500",
        "simpleRepaymentPeriod": "36"
    }
  ],
  setCircles: (value) => set(() => ({ circles: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
  setRes: (value) => set(() => ({ res: value })), // Function to update 'res'
  setProject: (value) => set(() => ({ project: value })), // Function to update 'res'
  toggleShowViewer: () => set((state) => ({ showViewer: !state.showViewer })),
}));

export default useStore;

import { lazyLoad } from "@/components/layout/lazy-load";


export type UIRoutesType = {
  name: string;
  path: string;
  component: React.FC;
  children?: UIRoutesType[];
};

/**
 * Define your routes
 * @type {Record<keyof typeof UIRoutes, UIRoutesType>}
 */
const UIRoutes = {
  home: {
    name: "navigation.home",
    path: "/",
    component: lazyLoad(() => import("../pages/home/Home")),
  },
  about: {
    name: "navigation.about",
    path: "/about",
    component: lazyLoad(() => import("../pages/about/About")),
  },
  clinics: {
    name: "navigation.clinics",
    path: "/clinics",
    component: lazyLoad(() => import("../pages/clinics/Clinics")),
  },
  serviceDetails: {
    name: "navigation.serviceDetails",
    path: "/service-detail/:id",
    component: lazyLoad(() => import("../pages/clinics/ServiceDetails")),
  },
  boardM: {
    name: "navigation.boardM",
    path: "/board-of-management",
    component: lazyLoad(() => import("../pages/about/BoardOfManagement")),
  },
  boardT: {
    name: "navigation.boardT",
    path: "/board-of-trustees",
    component: lazyLoad(() => import("../pages/about/BoardOfTrustees")),
  },
  boardS: {
    name: "navigation.boardT",
    path: "/senior-management-team",
    component: lazyLoad(() => import("../pages/about/SeniorManagement")),
  },
  HistorY: {
    name: "navigation.HistorY",
    path: "/history",
    component: lazyLoad(() => import("../pages/about/History")),
  },
  accreditation: {
    name: "navigation.accrediTation",
    path: "/accreditation-certification",
    component: lazyLoad(() => import("../pages/about/Accreditation")),
  },
  opcList: {
    name: "navigation.opcList",
    path: "/opc-list",
    component: lazyLoad(() => import("../pages/outpatient-centers/OpcList")),
  },
  opcDetails: {
    name: "navigation.opcDetails",
    path: "/outpatient-center/:id",
    component: lazyLoad(() => import("../pages/outpatient-centers/OpcDetails")),
  },
  IndividualPage: {
    name: "navigation.individualPage",
    path: "/member-page/:id",
    component: lazyLoad(() => import("../pages/about/MemberPage")),
  }
};

export const RoutesPath: Record<keyof typeof UIRoutes, UIRoutesType> = UIRoutes;

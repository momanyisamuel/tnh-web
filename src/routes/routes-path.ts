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
    path: "/about-us",
    component: lazyLoad(() => import("../pages/about/About")),
  },
  clinicalServices: {
    name: "navigation.clinicalServices",
    path: "/clinical-services",
    component: lazyLoad(() => import("../pages/clinics/Clinics")),
  },
  serviceDetails: {
    name: "navigation.serviceDetails",
    path: "/service-detail/:id",
    component: lazyLoad(() => import("../pages/clinics/ServiceDetails")),
  },
  boardOfManagement: {
    name: "navigation.boardOfManagement",
    path: "/about-us/board-of-management",
    component: lazyLoad(() => import("../pages/about/BoardOfManagement")),
  },
  boardOfTrustees: {
    name: "navigation.boardOfTrustees",
    path: "/about-us/board-of-trustees",
    component: lazyLoad(() => import("../pages/about/BoardOfTrustees")),
  },
  seniorManagement: {
    name: "navigation.seniorManagement",
    path: "/about-us/senior-management",
    component: lazyLoad(() => import("../pages/about/SeniorManagement")),
  },
  history: {
    name: "navigation.history",
    path: "/about-us/history",
    component: lazyLoad(() => import("../pages/about/History")),
  },
  accreditation: {
    name: "navigation.accreditation",
    path: "/about-us/accreditation-certification",
    component: lazyLoad(() => import("../pages/about/Accreditation")),
  },
  outpatientCenters: {
    name: "navigation.outpatientCenters",
    path: "/outpatient-centers",
    component: lazyLoad(
      () =>
        import(
          "../pages/patients-visitors/outpatient-centers/OutpatientCenters"
        )
    ),
  },
  outPatientCenterDetails: {
    name: "navigation.outPatientCenterDetails",
    path: "/outpatient-centers/:id",
    component: lazyLoad(
      () =>
        import(
          "../pages/patients-visitors/outpatient-centers/OutpatientCenterDetails"
        )
    ),
  },
  IndividualPage: {
    name: "navigation.individualPage",
    path: "/member-page/:id",
    component: lazyLoad(() => import("../pages/about/MemberPage")),
  },
  careers: {
    name: "navigation.careers",
    path: "/careers",
    component: lazyLoad(() => import("../pages/new-media/careers/Careers")),
  },
  contact: {
    name: "navigation.contact",
    path: "/contact",
    component: lazyLoad(() => import("../pages/contact/Contact")),
  },
  admissionCharges: {
    name: "navigation.admissionCharges",
    path: "/admission-charges",
    component: lazyLoad(
      () => import("../pages/patients-visitors/AdmissionCharges")
    ),
  },

  medicalTourism: {
    name: "navigation.medicalTourism",
    path: "/medical-tourism",
    component: lazyLoad(
      () => import("../pages/clinical-services/CardiologyService")
    ),
  },
  blogList: {
    name: "navigation.blogList",
    path: "/bloglist",
    component: lazyLoad(() => import("../pages/blog/BlogList")),
  },
  blogDetails: {
    name: "navigation.blogDetails",
    path: "/blog/:id",
    component: lazyLoad(() => import("../pages/blog/BlogDetail")),
  },
};

export const RoutesPath: Record<keyof typeof UIRoutes, UIRoutesType> = UIRoutes;

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oXYPe9dPJsk6AfdKWxYUef
// Component: mUiy1Qi2hv
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: oXYPe9dPJsk6AfdKWxYUef/projectcss
import sty from "./PlasmicDsfsdfa.module.css"; // plasmic-import: mUiy1Qi2hv/css

export type PlasmicDsfsdfa__VariantMembers = {};
export type PlasmicDsfsdfa__VariantsArgs = {};
type VariantPropType = keyof PlasmicDsfsdfa__VariantsArgs;
export const PlasmicDsfsdfa__VariantProps = new Array<VariantPropType>();

export type PlasmicDsfsdfa__ArgsType = {
  sdfasfas?: string;
};
type ArgPropType = keyof PlasmicDsfsdfa__ArgsType;
export const PlasmicDsfsdfa__ArgProps = new Array<ArgPropType>("sdfasfas");

export type PlasmicDsfsdfa__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDsfsdfaProps {
  sdfasfas?: string;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDsfsdfa__RenderFunc(props: {
  variants: PlasmicDsfsdfa__VariantsArgs;
  args: PlasmicDsfsdfa__ArgsType;
  overrides: PlasmicDsfsdfa__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDsfsdfa__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDsfsdfa__VariantsArgs;
    args?: PlasmicDsfsdfa__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDsfsdfa__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDsfsdfa__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDsfsdfa__ArgProps,
          internalVariantPropNames: PlasmicDsfsdfa__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDsfsdfa__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDsfsdfa";
  } else {
    func.displayName = `PlasmicDsfsdfa.${nodeName}`;
  }
  return func;
}

export const PlasmicDsfsdfa = Object.assign(
  // Top-level PlasmicDsfsdfa renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDsfsdfa
    internalVariantProps: PlasmicDsfsdfa__VariantProps,
    internalArgProps: PlasmicDsfsdfa__ArgProps
  }
);

export default PlasmicDsfsdfa;
/* prettier-ignore-end */
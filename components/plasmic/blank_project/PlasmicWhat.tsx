// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oXYPe9dPJsk6AfdKWxYUef
// Component: V_gLTPKtih
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
import TextInput from "../../TextInput"; // plasmic-import: CyhRxYesc4p/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: oXYPe9dPJsk6AfdKWxYUef/projectcss
import sty from "./PlasmicWhat.module.css"; // plasmic-import: V_gLTPKtih/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: XDhWPpJrM7Y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Tl3uVyw_rwC/icon

export type PlasmicWhat__VariantMembers = {};
export type PlasmicWhat__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhat__VariantsArgs;
export const PlasmicWhat__VariantProps = new Array<VariantPropType>();

export type PlasmicWhat__ArgsType = {
  whatValue?: string;
  onWhatValueChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicWhat__ArgsType;
export const PlasmicWhat__ArgProps = new Array<ArgPropType>(
  "whatValue",
  "onWhatValueChange"
);

export type PlasmicWhat__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
};

export interface DefaultWhatProps {
  whatValue?: string;
  onWhatValueChange?: (val: string) => void;
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

function PlasmicWhat__RenderFunc(props: {
  variants: PlasmicWhat__VariantsArgs;
  args: PlasmicWhat__ArgsType;
  overrides: PlasmicWhat__OverridesType;

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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "writable",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined,
        valueProp: "whatValue",
        onChangeProp: "onWhatValueChange"
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Enter some text"}
      </div>

      <TextInput
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        className={classNames("__wab_instance", sty.textInput)}
        onChange={(...args) => {
          p.generateStateOnChangeProp($state, ["textInput", "value"])(
            (e => e.target?.value).apply(null, args)
          );
        }}
        value={p.generateStateValueProp($state, ["textInput", "value"])}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "textInput"],
  text: ["text"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWhat__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhat__VariantsArgs;
    args?: PlasmicWhat__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhat__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWhat__ArgsType,
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
          internalArgPropNames: PlasmicWhat__ArgProps,
          internalVariantPropNames: PlasmicWhat__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhat";
  } else {
    func.displayName = `PlasmicWhat.${nodeName}`;
  }
  return func;
}

export const PlasmicWhat = Object.assign(
  // Top-level PlasmicWhat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicWhat
    internalVariantProps: PlasmicWhat__VariantProps,
    internalArgProps: PlasmicWhat__ArgProps
  }
);

export default PlasmicWhat;
/* prettier-ignore-end */

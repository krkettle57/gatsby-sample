/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: string;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: never;
  };

  type File = Node & {
    readonly sourceInstanceName: Scalars["String"];
    readonly absolutePath: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly prettySize: Scalars["String"];
    readonly modifiedTime: Scalars["Date"];
    readonly accessTime: Scalars["Date"];
    readonly changeTime: Scalars["Date"];
    readonly birthTime: Scalars["Date"];
    readonly root: Scalars["String"];
    readonly dir: Scalars["String"];
    readonly base: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly name: Scalars["String"];
    readonly relativeDirectory: Scalars["String"];
    readonly dev: Scalars["Int"];
    readonly mode: Scalars["Int"];
    readonly nlink: Scalars["Int"];
    readonly uid: Scalars["Int"];
    readonly gid: Scalars["Int"];
    readonly rdev: Scalars["Int"];
    readonly ino: Scalars["Float"];
    readonly atimeMs: Scalars["Float"];
    readonly mtimeMs: Scalars["Float"];
    readonly ctimeMs: Scalars["Float"];
    readonly atime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    readonly blksize: Maybe<Scalars["Int"]>;
    readonly blocks: Maybe<Scalars["Int"]>;
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars["String"]>;
    /** Returns all children nodes filtered by type ImageSharp */
    readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_atimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_mtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_ctimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  /** Node Interface */
  type Node = {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Internal = {
    readonly content: Maybe<Scalars["String"]>;
    readonly contentDigest: Scalars["String"];
    readonly description: Maybe<Scalars["String"]>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly ignoreType: Maybe<Scalars["Boolean"]>;
    readonly mediaType: Maybe<Scalars["String"]>;
    readonly owner: Scalars["String"];
    readonly type: Scalars["String"];
  };

  type Directory = Node & {
    readonly sourceInstanceName: Scalars["String"];
    readonly absolutePath: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly prettySize: Scalars["String"];
    readonly modifiedTime: Scalars["Date"];
    readonly accessTime: Scalars["Date"];
    readonly changeTime: Scalars["Date"];
    readonly birthTime: Scalars["Date"];
    readonly root: Scalars["String"];
    readonly dir: Scalars["String"];
    readonly base: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly name: Scalars["String"];
    readonly relativeDirectory: Scalars["String"];
    readonly dev: Scalars["Int"];
    readonly mode: Scalars["Int"];
    readonly nlink: Scalars["Int"];
    readonly uid: Scalars["Int"];
    readonly gid: Scalars["Int"];
    readonly rdev: Scalars["Int"];
    readonly ino: Scalars["Float"];
    readonly atimeMs: Scalars["Float"];
    readonly mtimeMs: Scalars["Float"];
    readonly ctimeMs: Scalars["Float"];
    readonly atime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    readonly blksize: Maybe<Scalars["Int"]>;
    readonly blocks: Maybe<Scalars["Int"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars["Date"]>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly port: Maybe<Scalars["Int"]>;
    readonly host: Maybe<Scalars["String"]>;
    readonly polyfill: Maybe<Scalars["Boolean"]>;
    readonly pathPrefix: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly author: Maybe<Scalars["String"]>;
    readonly siteUrl: Maybe<Scalars["String"]>;
  };

  type SiteFunction = Node & {
    readonly functionRoute: Scalars["String"];
    readonly pluginName: Scalars["String"];
    readonly originalAbsoluteFilePath: Scalars["String"];
    readonly originalRelativeFilePath: Scalars["String"];
    readonly relativeCompiledFilePath: Scalars["String"];
    readonly absoluteCompiledFilePath: Scalars["String"];
    readonly matchPath: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type SitePage = Node & {
    readonly path: Scalars["String"];
    readonly component: Scalars["String"];
    readonly internalComponentName: Scalars["String"];
    readonly componentChunkName: Scalars["String"];
    readonly matchPath: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
    readonly context: Maybe<SitePageContext>;
    readonly pluginCreator: Maybe<SitePlugin>;
    readonly pluginCreatorId: Maybe<Scalars["String"]>;
  };

  type SitePageContext = {
    readonly post: Maybe<SitePageContextPost>;
  };

  type SitePageContextPost = {
    readonly title: Maybe<Scalars["String"]>;
    readonly slug: Maybe<Scalars["String"]>;
    readonly description: Maybe<SitePageContextPostDescription>;
    readonly updatedAt: Maybe<Scalars["String"]>;
    readonly eyeCatch: Maybe<SitePageContextPostEyeCatch>;
    readonly body: Maybe<SitePageContextPostBody>;
  };

  type SitePageContextPostDescription = {
    readonly description: Maybe<Scalars["String"]>;
  };

  type SitePageContextPostEyeCatch = {
    readonly file: Maybe<SitePageContextPostEyeCatchFile>;
    readonly title: Maybe<Scalars["String"]>;
  };

  type SitePageContextPostEyeCatchFile = {
    readonly url: Maybe<Scalars["String"]>;
  };

  type SitePageContextPostBody = {
    readonly childMarkdownRemark: Maybe<SitePageContextPostBodyChildMarkdownRemark>;
  };

  type SitePageContextPostBodyChildMarkdownRemark = {
    readonly html: Maybe<Scalars["String"]>;
  };

  type SitePlugin = Node & {
    readonly resolve: Maybe<Scalars["String"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly pluginFilepath: Maybe<Scalars["String"]>;
    readonly pluginOptions: Maybe<SitePluginPluginOptions>;
    readonly packageJson: Maybe<SitePluginPackageJson>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type SitePluginPluginOptions = {
    readonly name: Maybe<Scalars["String"]>;
    readonly path: Maybe<Scalars["String"]>;
    readonly base64Width: Maybe<Scalars["Int"]>;
    readonly stripMetadata: Maybe<Scalars["Boolean"]>;
    readonly defaultQuality: Maybe<Scalars["Int"]>;
    readonly failOnError: Maybe<Scalars["Boolean"]>;
    readonly short_name: Maybe<Scalars["String"]>;
    readonly start_url: Maybe<Scalars["String"]>;
    readonly display: Maybe<Scalars["String"]>;
    readonly icon: Maybe<Scalars["String"]>;
    readonly legacy: Maybe<Scalars["Boolean"]>;
    readonly theme_color_in_head: Maybe<Scalars["Boolean"]>;
    readonly cache_busting_mode: Maybe<Scalars["String"]>;
    readonly crossOrigin: Maybe<Scalars["String"]>;
    readonly include_favicon: Maybe<Scalars["Boolean"]>;
    readonly cacheDigest: Maybe<Scalars["String"]>;
    readonly spaceId: Maybe<Scalars["String"]>;
    readonly accessToken: Maybe<Scalars["String"]>;
    readonly host: Maybe<Scalars["String"]>;
    readonly environment: Maybe<Scalars["String"]>;
    readonly downloadLocal: Maybe<Scalars["Boolean"]>;
    readonly forceFullSync: Maybe<Scalars["Boolean"]>;
    readonly pageLimit: Maybe<Scalars["Int"]>;
    readonly assetDownloadWorkers: Maybe<Scalars["Int"]>;
    readonly useNameForId: Maybe<Scalars["Boolean"]>;
    readonly commonmark: Maybe<Scalars["Boolean"]>;
    readonly footnotes: Maybe<Scalars["Boolean"]>;
    readonly pedantic: Maybe<Scalars["Boolean"]>;
    readonly gfm: Maybe<Scalars["Boolean"]>;
    readonly pathCheck: Maybe<Scalars["Boolean"]>;
    readonly allExtensions: Maybe<Scalars["Boolean"]>;
    readonly isTSX: Maybe<Scalars["Boolean"]>;
    readonly jsxPragma: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
    readonly main: Maybe<Scalars["String"]>;
    readonly license: Maybe<Scalars["String"]>;
    readonly dependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
    >;
    readonly devDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
    >;
    readonly peerDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
    >;
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SiteBuildMetadata = Node & {
    readonly buildTime: Maybe<Scalars["Date"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type ImageFormat = "NO_CHANGE" | "AUTO" | "jpg" | "png" | "webp" | "avif";

  type ImageFit = "cover" | "contain" | "fill" | "inside" | "outside";

  type ImageLayout = "fixed" | "fullWidth" | "constrained";

  type ImageCropFocus = "CENTER" | 1 | 5 | 2 | 6 | 3 | 7 | 4 | 8 | 16 | 17;

  type DuotoneGradient = {
    readonly highlight: Scalars["String"];
    readonly shadow: Scalars["String"];
    readonly opacity: Maybe<Scalars["Int"]>;
  };

  type PotraceTurnPolicy =
    | "black"
    | "white"
    | "left"
    | "right"
    | "minority"
    | "majority";

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>;
    readonly turdSize: Maybe<Scalars["Float"]>;
    readonly alphaMax: Maybe<Scalars["Float"]>;
    readonly optCurve: Maybe<Scalars["Boolean"]>;
    readonly optTolerance: Maybe<Scalars["Float"]>;
    readonly threshold: Maybe<Scalars["Int"]>;
    readonly blackOnWhite: Maybe<Scalars["Boolean"]>;
    readonly color: Maybe<Scalars["String"]>;
    readonly background: Maybe<Scalars["String"]>;
  };

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>;
    readonly fluid: Maybe<ImageSharpFluid>;
    readonly gatsbyImageData: Scalars["JSON"];
    readonly original: Maybe<ImageSharpOriginal>;
    readonly resize: Maybe<ImageSharpResize>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    jpegQuality: Maybe<Scalars["Int"]>;
    pngQuality: Maybe<Scalars["Int"]>;
    webpQuality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
  };

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars["Int"]>;
    maxHeight: Maybe<Scalars["Int"]>;
    base64Width: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars["Int"]>;
    jpegQuality: Maybe<Scalars["Int"]>;
    pngQuality: Maybe<Scalars["Int"]>;
    webpQuality: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
    sizes?: Maybe<Scalars["String"]>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  };

  type ImageSharp_gatsbyImageDataArgs = {
    layout?: Maybe<ImageLayout>;
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    placeholder: Maybe<ImagePlaceholder>;
    blurredOptions: Maybe<BlurredOptions>;
    tracedSVGOptions: Maybe<Potrace>;
    formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
    breakpoints: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
    sizes: Maybe<Scalars["String"]>;
    quality: Maybe<Scalars["Int"]>;
    jpgOptions: Maybe<JPGOptions>;
    pngOptions: Maybe<PNGOptions>;
    webpOptions: Maybe<WebPOptions>;
    avifOptions: Maybe<AVIFOptions>;
    transformOptions: Maybe<TransformOptions>;
    backgroundColor: Maybe<Scalars["String"]>;
  };

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    quality: Maybe<Scalars["Int"]>;
    jpegQuality: Maybe<Scalars["Int"]>;
    pngQuality: Maybe<Scalars["Int"]>;
    webpQuality: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    pngCompressionLevel?: Maybe<Scalars["Int"]>;
    pngCompressionSpeed?: Maybe<Scalars["Int"]>;
    grayscale?: Maybe<Scalars["Boolean"]>;
    duotone: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars["Boolean"]>;
    traceSVG: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars["String"]>;
    rotate?: Maybe<Scalars["Int"]>;
    trim?: Maybe<Scalars["Float"]>;
  };

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly width: Scalars["Float"];
    readonly height: Scalars["Float"];
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly srcSetWebp: Maybe<Scalars["String"]>;
    readonly originalName: Maybe<Scalars["String"]>;
  };

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly aspectRatio: Scalars["Float"];
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly srcSetWebp: Maybe<Scalars["String"]>;
    readonly sizes: Scalars["String"];
    readonly originalImg: Maybe<Scalars["String"]>;
    readonly originalName: Maybe<Scalars["String"]>;
    readonly presentationWidth: Scalars["Int"];
    readonly presentationHeight: Scalars["Int"];
  };

  type ImagePlaceholder = "dominantColor" | "tracedSVG" | "blurred" | "none";

  type BlurredOptions = {
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: Maybe<Scalars["Int"]>;
    /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
    readonly toFormat: Maybe<ImageFormat>;
  };

  type JPGOptions = {
    readonly quality: Maybe<Scalars["Int"]>;
    readonly progressive: Maybe<Scalars["Boolean"]>;
  };

  type PNGOptions = {
    readonly quality: Maybe<Scalars["Int"]>;
    readonly compressionSpeed: Maybe<Scalars["Int"]>;
  };

  type WebPOptions = {
    readonly quality: Maybe<Scalars["Int"]>;
  };

  type AVIFOptions = {
    readonly quality: Maybe<Scalars["Int"]>;
    readonly lossless: Maybe<Scalars["Boolean"]>;
    readonly speed: Maybe<Scalars["Int"]>;
  };

  type TransformOptions = {
    readonly grayscale: Maybe<Scalars["Boolean"]>;
    readonly duotone: Maybe<DuotoneGradient>;
    readonly rotate: Maybe<Scalars["Int"]>;
    readonly trim: Maybe<Scalars["Float"]>;
    readonly cropFocus: Maybe<ImageCropFocus>;
    readonly fit: Maybe<ImageFit>;
  };

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars["Float"]>;
    readonly height: Maybe<Scalars["Float"]>;
    readonly src: Maybe<Scalars["String"]>;
  };

  type ImageSharpResize = {
    readonly src: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly width: Maybe<Scalars["Int"]>;
    readonly height: Maybe<Scalars["Int"]>;
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly originalName: Maybe<Scalars["String"]>;
  };

  type MarkdownHeading = {
    readonly id: Maybe<Scalars["String"]>;
    readonly value: Maybe<Scalars["String"]>;
    readonly depth: Maybe<Scalars["Int"]>;
  };

  type MarkdownHeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  type MarkdownExcerptFormats = "PLAIN" | "HTML" | "MARKDOWN";

  type MarkdownWordCount = {
    readonly paragraphs: Maybe<Scalars["Int"]>;
    readonly sentences: Maybe<Scalars["Int"]>;
    readonly words: Maybe<Scalars["Int"]>;
  };

  type MarkdownRemark = Node & {
    readonly id: Scalars["ID"];
    readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
    readonly excerpt: Maybe<Scalars["String"]>;
    readonly rawMarkdownBody: Maybe<Scalars["String"]>;
    readonly html: Maybe<Scalars["String"]>;
    readonly htmlAst: Maybe<Scalars["JSON"]>;
    readonly excerptAst: Maybe<Scalars["JSON"]>;
    readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
    readonly timeToRead: Maybe<Scalars["Int"]>;
    readonly tableOfContents: Maybe<Scalars["String"]>;
    readonly wordCount: Maybe<MarkdownWordCount>;
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type MarkdownRemark_excerptArgs = {
    pruneLength?: Maybe<Scalars["Int"]>;
    truncate?: Maybe<Scalars["Boolean"]>;
    format?: Maybe<MarkdownExcerptFormats>;
  };

  type MarkdownRemark_excerptAstArgs = {
    pruneLength?: Maybe<Scalars["Int"]>;
    truncate?: Maybe<Scalars["Boolean"]>;
  };

  type MarkdownRemark_headingsArgs = {
    depth: Maybe<MarkdownHeadingLevels>;
  };

  type MarkdownRemark_tableOfContentsArgs = {
    absolute?: Maybe<Scalars["Boolean"]>;
    pathToSlugField?: Maybe<Scalars["String"]>;
    maxDepth: Maybe<Scalars["Int"]>;
    heading: Maybe<Scalars["String"]>;
  };

  type MarkdownRemarkFrontmatter = {
    readonly title: Maybe<Scalars["String"]>;
  };

  type ContentfulEntry = {
    readonly contentful_id: Scalars["String"];
    readonly id: Scalars["ID"];
    readonly node_locale: Scalars["String"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ContentfulReference = {
    readonly contentful_id: Scalars["String"];
    readonly id: Scalars["ID"];
  };

  type ContentfulAsset = ContentfulReference &
    Node & {
      readonly contentful_id: Scalars["String"];
      readonly id: Scalars["ID"];
      readonly spaceId: Maybe<Scalars["String"]>;
      readonly createdAt: Maybe<Scalars["Date"]>;
      readonly updatedAt: Maybe<Scalars["Date"]>;
      readonly file: Maybe<ContentfulAssetFile>;
      readonly title: Maybe<Scalars["String"]>;
      readonly description: Maybe<Scalars["String"]>;
      readonly node_locale: Maybe<Scalars["String"]>;
      readonly sys: Maybe<ContentfulAssetSys>;
      readonly fixed: Maybe<ContentfulFixed>;
      readonly fluid: Maybe<ContentfulFluid>;
      readonly gatsbyImageData: Maybe<Scalars["JSON"]>;
      readonly resize: Maybe<ContentfulResize>;
      readonly parent: Maybe<Node>;
      readonly children: ReadonlyArray<Node>;
      readonly internal: Internal;
    };

  type ContentfulAsset_createdAtArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type ContentfulAsset_updatedAtArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type ContentfulAsset_fixedArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    quality?: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ContentfulImageFormat>;
    resizingBehavior: Maybe<ImageResizingBehavior>;
    cropFocus?: Maybe<ContentfulImageCropFocus>;
    cornerRadius?: Maybe<Scalars["Int"]>;
    background?: Maybe<Scalars["String"]>;
  };

  type ContentfulAsset_fluidArgs = {
    maxWidth: Maybe<Scalars["Int"]>;
    maxHeight: Maybe<Scalars["Int"]>;
    quality?: Maybe<Scalars["Int"]>;
    toFormat?: Maybe<ContentfulImageFormat>;
    resizingBehavior: Maybe<ImageResizingBehavior>;
    cropFocus?: Maybe<ContentfulImageCropFocus>;
    cornerRadius?: Maybe<Scalars["Int"]>;
    background?: Maybe<Scalars["String"]>;
    sizes: Maybe<Scalars["String"]>;
  };

  type ContentfulAsset_gatsbyImageDataArgs = {
    layout?: Maybe<ContentfulImageLayout>;
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    aspectRatio: Maybe<Scalars["Float"]>;
    placeholder?: Maybe<ContentfulImagePlaceholder>;
    formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
    breakpoints: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
    sizes: Maybe<Scalars["String"]>;
    backgroundColor: Maybe<Scalars["String"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    resizingBehavior: Maybe<ImageResizingBehavior>;
    cropFocus: Maybe<ContentfulImageCropFocus>;
    cornerRadius?: Maybe<Scalars["Int"]>;
    quality?: Maybe<Scalars["Int"]>;
  };

  type ContentfulAsset_resizeArgs = {
    width: Maybe<Scalars["Int"]>;
    height: Maybe<Scalars["Int"]>;
    quality?: Maybe<Scalars["Int"]>;
    jpegProgressive?: Maybe<Scalars["Boolean"]>;
    resizingBehavior: Maybe<ImageResizingBehavior>;
    toFormat?: Maybe<ContentfulImageFormat>;
    cropFocus?: Maybe<ContentfulImageCropFocus>;
    background?: Maybe<Scalars["String"]>;
    cornerRadius?: Maybe<Scalars["Int"]>;
  };

  type ContentfulAssetFile = {
    readonly url: Maybe<Scalars["String"]>;
    readonly details: Maybe<ContentfulAssetFileDetails>;
    readonly fileName: Maybe<Scalars["String"]>;
    readonly contentType: Maybe<Scalars["String"]>;
  };

  type ContentfulAssetFileDetails = {
    readonly size: Maybe<Scalars["Int"]>;
    readonly image: Maybe<ContentfulAssetFileDetailsImage>;
  };

  type ContentfulAssetFileDetailsImage = {
    readonly width: Maybe<Scalars["Int"]>;
    readonly height: Maybe<Scalars["Int"]>;
  };

  type ContentfulAssetSys = {
    readonly type: Maybe<Scalars["String"]>;
    readonly revision: Maybe<Scalars["Int"]>;
  };

  type ContentfulFixed = {
    readonly base64: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly width: Scalars["Float"];
    readonly height: Scalars["Float"];
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly srcSetWebp: Maybe<Scalars["String"]>;
  };

  type ContentfulImageFormat = "NO_CHANGE" | "AUTO" | "jpg" | "png" | "webp";

  type ImageResizingBehavior =
    | "NO_CHANGE"
    /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
    | "pad"
    /** Crop a part of the original image to match the specified size. */
    | "crop"
    /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
    | "fill"
    /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
    | "thumb"
    /** Scale the image regardless of the original aspect ratio. */
    | "scale";

  type ContentfulImageCropFocus =
    | "top"
    | "top_left"
    | "top_right"
    | "bottom"
    | "bottom_left"
    | "bottom_right"
    | "right"
    | "left"
    | "face"
    | "faces"
    | "center";

  type ContentfulFluid = {
    readonly base64: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly aspectRatio: Scalars["Float"];
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly srcSetWebp: Maybe<Scalars["String"]>;
    readonly sizes: Scalars["String"];
  };

  type ContentfulImageLayout = "fixed" | "fullWidth" | "constrained";

  type ContentfulImagePlaceholder =
    | "dominantColor"
    | "tracedSVG"
    | "blurred"
    | "none";

  type ContentfulResize = {
    readonly base64: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly src: Maybe<Scalars["String"]>;
    readonly width: Maybe<Scalars["Int"]>;
    readonly height: Maybe<Scalars["Int"]>;
    readonly aspectRatio: Maybe<Scalars["Float"]>;
  };

  type ContentfulPost = ContentfulReference &
    ContentfulEntry &
    Node & {
      readonly contentful_id: Scalars["String"];
      readonly id: Scalars["ID"];
      readonly node_locale: Scalars["String"];
      readonly title: Maybe<Scalars["String"]>;
      readonly slug: Maybe<Scalars["String"]>;
      readonly description: Maybe<contentfulPostDescriptionTextNode>;
      readonly body: Maybe<contentfulPostBodyTextNode>;
      readonly spaceId: Maybe<Scalars["String"]>;
      readonly createdAt: Maybe<Scalars["Date"]>;
      readonly updatedAt: Maybe<Scalars["Date"]>;
      readonly sys: Maybe<ContentfulPostSys>;
      readonly eyeCatch: Maybe<ContentfulAsset>;
      /** Returns all children nodes filtered by type contentfulPostDescriptionTextNode */
      readonly childrenContentfulPostDescriptionTextNode: Maybe<
        ReadonlyArray<Maybe<contentfulPostDescriptionTextNode>>
      >;
      /** Returns the first child node of type contentfulPostDescriptionTextNode or null if there are no children of given type on this node */
      readonly childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNode>;
      /** Returns all children nodes filtered by type contentfulPostBodyTextNode */
      readonly childrenContentfulPostBodyTextNode: Maybe<
        ReadonlyArray<Maybe<contentfulPostBodyTextNode>>
      >;
      /** Returns the first child node of type contentfulPostBodyTextNode or null if there are no children of given type on this node */
      readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
      readonly parent: Maybe<Node>;
      readonly children: ReadonlyArray<Node>;
      readonly internal: Internal;
    };

  type ContentfulPost_createdAtArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type ContentfulPost_updatedAtArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type ContentfulPostSys = {
    readonly type: Maybe<Scalars["String"]>;
    readonly revision: Maybe<Scalars["Int"]>;
    readonly contentType: Maybe<ContentfulPostSysContentType>;
  };

  type ContentfulPostSysContentType = {
    readonly sys: Maybe<ContentfulPostSysContentTypeSys>;
  };

  type ContentfulPostSysContentTypeSys = {
    readonly type: Maybe<Scalars["String"]>;
    readonly linkType: Maybe<Scalars["String"]>;
    readonly id: Maybe<Scalars["String"]>;
  };

  type contentfulPostDescriptionTextNode = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly description: Maybe<Scalars["String"]>;
    readonly sys: Maybe<contentfulPostDescriptionTextNodeSys>;
    /** Returns all children nodes filtered by type MarkdownRemark */
    readonly childrenMarkdownRemark: Maybe<
      ReadonlyArray<Maybe<MarkdownRemark>>
    >;
    /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
    readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  };

  type contentfulPostDescriptionTextNodeSys = {
    readonly type: Maybe<Scalars["String"]>;
  };

  type contentfulPostBodyTextNode = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly body: Maybe<Scalars["String"]>;
    readonly sys: Maybe<contentfulPostBodyTextNodeSys>;
    /** Returns all children nodes filtered by type MarkdownRemark */
    readonly childrenMarkdownRemark: Maybe<
      ReadonlyArray<Maybe<MarkdownRemark>>
    >;
    /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
    readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  };

  type contentfulPostBodyTextNodeSys = {
    readonly type: Maybe<Scalars["String"]>;
  };

  type ContentfulContentType = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly name: Maybe<Scalars["String"]>;
    readonly displayField: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly sys: Maybe<ContentfulContentTypeSys>;
  };

  type ContentfulContentTypeSys = {
    readonly type: Maybe<Scalars["String"]>;
  };

  type Query = {
    readonly file: Maybe<File>;
    readonly allFile: FileConnection;
    readonly directory: Maybe<Directory>;
    readonly allDirectory: DirectoryConnection;
    readonly site: Maybe<Site>;
    readonly allSite: SiteConnection;
    readonly siteFunction: Maybe<SiteFunction>;
    readonly allSiteFunction: SiteFunctionConnection;
    readonly sitePage: Maybe<SitePage>;
    readonly allSitePage: SitePageConnection;
    readonly sitePlugin: Maybe<SitePlugin>;
    readonly allSitePlugin: SitePluginConnection;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly allImageSharp: ImageSharpConnection;
    readonly markdownRemark: Maybe<MarkdownRemark>;
    readonly allMarkdownRemark: MarkdownRemarkConnection;
    readonly contentfulEntry: Maybe<ContentfulEntry>;
    readonly allContentfulEntry: ContentfulEntryConnection;
    readonly contentfulAsset: Maybe<ContentfulAsset>;
    readonly allContentfulAsset: ContentfulAssetConnection;
    readonly contentfulPost: Maybe<ContentfulPost>;
    readonly allContentfulPost: ContentfulPostConnection;
    readonly contentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNode>;
    readonly allContentfulPostDescriptionTextNode: contentfulPostDescriptionTextNodeConnection;
    readonly contentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
    readonly allContentfulPostBodyTextNode: contentfulPostBodyTextNodeConnection;
    readonly contentfulContentType: Maybe<ContentfulContentType>;
    readonly allContentfulContentType: ContentfulContentTypeConnection;
  };

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    childrenImageSharp: Maybe<ImageSharpFilterListInput>;
    childImageSharp: Maybe<ImageSharpFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_siteFunctionArgs = {
    functionRoute: Maybe<StringQueryOperatorInput>;
    pluginName: Maybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
    originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
    relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
    absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteFunctionArgs = {
    filter: Maybe<SiteFunctionFilterInput>;
    sort: Maybe<SiteFunctionSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
  };

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_sitePluginArgs = {
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_siteBuildMetadataArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>;
    sort: Maybe<SiteBuildMetadataSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>;
    sort: Maybe<ImageSharpSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_markdownRemarkArgs = {
    id: Maybe<StringQueryOperatorInput>;
    frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody: Maybe<StringQueryOperatorInput>;
    html: Maybe<StringQueryOperatorInput>;
    htmlAst: Maybe<JSONQueryOperatorInput>;
    excerptAst: Maybe<JSONQueryOperatorInput>;
    headings: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead: Maybe<IntQueryOperatorInput>;
    tableOfContents: Maybe<StringQueryOperatorInput>;
    wordCount: Maybe<MarkdownWordCountFilterInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allMarkdownRemarkArgs = {
    filter: Maybe<MarkdownRemarkFilterInput>;
    sort: Maybe<MarkdownRemarkSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulEntryArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    node_locale: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allContentfulEntryArgs = {
    filter: Maybe<ContentfulEntryFilterInput>;
    sort: Maybe<ContentfulEntrySortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulAssetArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    spaceId: Maybe<StringQueryOperatorInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    file: Maybe<ContentfulAssetFileFilterInput>;
    title: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    node_locale: Maybe<StringQueryOperatorInput>;
    sys: Maybe<ContentfulAssetSysFilterInput>;
    fixed: Maybe<ContentfulFixedFilterInput>;
    fluid: Maybe<ContentfulFluidFilterInput>;
    gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    resize: Maybe<ContentfulResizeFilterInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allContentfulAssetArgs = {
    filter: Maybe<ContentfulAssetFilterInput>;
    sort: Maybe<ContentfulAssetSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulPostArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    node_locale: Maybe<StringQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    slug: Maybe<StringQueryOperatorInput>;
    description: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
    body: Maybe<contentfulPostBodyTextNodeFilterInput>;
    spaceId: Maybe<StringQueryOperatorInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    sys: Maybe<ContentfulPostSysFilterInput>;
    eyeCatch: Maybe<ContentfulAssetFilterInput>;
    childrenContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterListInput>;
    childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
    childrenContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterListInput>;
    childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allContentfulPostArgs = {
    filter: Maybe<ContentfulPostFilterInput>;
    sort: Maybe<ContentfulPostSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulPostDescriptionTextNodeArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    description: Maybe<StringQueryOperatorInput>;
    sys: Maybe<contentfulPostDescriptionTextNodeSysFilterInput>;
    childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
    childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  };

  type Query_allContentfulPostDescriptionTextNodeArgs = {
    filter: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
    sort: Maybe<contentfulPostDescriptionTextNodeSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulPostBodyTextNodeArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    body: Maybe<StringQueryOperatorInput>;
    sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
    childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
    childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  };

  type Query_allContentfulPostBodyTextNodeArgs = {
    filter: Maybe<contentfulPostBodyTextNodeFilterInput>;
    sort: Maybe<contentfulPostBodyTextNodeSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_contentfulContentTypeArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    name: Maybe<StringQueryOperatorInput>;
    displayField: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    sys: Maybe<ContentfulContentTypeSysFilterInput>;
  };

  type Query_allContentfulContentTypeArgs = {
    filter: Maybe<ContentfulContentTypeFilterInput>;
    sort: Maybe<ContentfulContentTypeSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars["String"]>;
    readonly ne: Maybe<Scalars["String"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly regex: Maybe<Scalars["String"]>;
    readonly glob: Maybe<Scalars["String"]>;
  };

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Int"]>;
    readonly ne: Maybe<Scalars["Int"]>;
    readonly gt: Maybe<Scalars["Int"]>;
    readonly gte: Maybe<Scalars["Int"]>;
    readonly lt: Maybe<Scalars["Int"]>;
    readonly lte: Maybe<Scalars["Int"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Date"]>;
    readonly ne: Maybe<Scalars["Date"]>;
    readonly gt: Maybe<Scalars["Date"]>;
    readonly gte: Maybe<Scalars["Date"]>;
    readonly lt: Maybe<Scalars["Date"]>;
    readonly lte: Maybe<Scalars["Date"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Float"]>;
    readonly ne: Maybe<Scalars["Float"]>;
    readonly gt: Maybe<Scalars["Float"]>;
    readonly gte: Maybe<Scalars["Float"]>;
    readonly lt: Maybe<Scalars["Float"]>;
    readonly lte: Maybe<Scalars["Float"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  };

  type ImageSharpFilterListInput = {
    readonly elemMatch: Maybe<ImageSharpFilterInput>;
  };

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>;
    readonly fluid: Maybe<ImageSharpFluidFilterInput>;
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    readonly original: Maybe<ImageSharpOriginalFilterInput>;
    readonly resize: Maybe<ImageSharpResizeFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<IntQueryOperatorInput>;
    readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  };

  type JSONQueryOperatorInput = {
    readonly eq: Maybe<Scalars["JSON"]>;
    readonly ne: Maybe<Scalars["JSON"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["JSON"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["JSON"]>>>;
    readonly regex: Maybe<Scalars["JSON"]>;
    readonly glob: Maybe<Scalars["JSON"]>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>;
  };

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly contentDigest: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly fieldOwners: Maybe<StringQueryOperatorInput>;
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly owner: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Boolean"]>;
    readonly ne: Maybe<Scalars["Boolean"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
  };

  type FileConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<FileGroupConnection>;
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_maxArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_minArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_sumArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  type PageInfo = {
    readonly currentPage: Scalars["Int"];
    readonly hasPreviousPage: Scalars["Boolean"];
    readonly hasNextPage: Scalars["Boolean"];
    readonly itemCount: Scalars["Int"];
    readonly pageCount: Scalars["Int"];
    readonly perPage: Maybe<Scalars["Int"]>;
    readonly totalCount: Scalars["Int"];
  };

  type FileFieldsEnum =
    | "sourceInstanceName"
    | "absolutePath"
    | "relativePath"
    | "extension"
    | "size"
    | "prettySize"
    | "modifiedTime"
    | "accessTime"
    | "changeTime"
    | "birthTime"
    | "root"
    | "dir"
    | "base"
    | "ext"
    | "name"
    | "relativeDirectory"
    | "dev"
    | "mode"
    | "nlink"
    | "uid"
    | "gid"
    | "rdev"
    | "ino"
    | "atimeMs"
    | "mtimeMs"
    | "ctimeMs"
    | "atime"
    | "mtime"
    | "ctime"
    | "birthtime"
    | "birthtimeMs"
    | "blksize"
    | "blocks"
    | "publicURL"
    | "childrenImageSharp"
    | "childrenImageSharp.fixed.base64"
    | "childrenImageSharp.fixed.tracedSVG"
    | "childrenImageSharp.fixed.aspectRatio"
    | "childrenImageSharp.fixed.width"
    | "childrenImageSharp.fixed.height"
    | "childrenImageSharp.fixed.src"
    | "childrenImageSharp.fixed.srcSet"
    | "childrenImageSharp.fixed.srcWebp"
    | "childrenImageSharp.fixed.srcSetWebp"
    | "childrenImageSharp.fixed.originalName"
    | "childrenImageSharp.fluid.base64"
    | "childrenImageSharp.fluid.tracedSVG"
    | "childrenImageSharp.fluid.aspectRatio"
    | "childrenImageSharp.fluid.src"
    | "childrenImageSharp.fluid.srcSet"
    | "childrenImageSharp.fluid.srcWebp"
    | "childrenImageSharp.fluid.srcSetWebp"
    | "childrenImageSharp.fluid.sizes"
    | "childrenImageSharp.fluid.originalImg"
    | "childrenImageSharp.fluid.originalName"
    | "childrenImageSharp.fluid.presentationWidth"
    | "childrenImageSharp.fluid.presentationHeight"
    | "childrenImageSharp.gatsbyImageData"
    | "childrenImageSharp.original.width"
    | "childrenImageSharp.original.height"
    | "childrenImageSharp.original.src"
    | "childrenImageSharp.resize.src"
    | "childrenImageSharp.resize.tracedSVG"
    | "childrenImageSharp.resize.width"
    | "childrenImageSharp.resize.height"
    | "childrenImageSharp.resize.aspectRatio"
    | "childrenImageSharp.resize.originalName"
    | "childrenImageSharp.id"
    | "childrenImageSharp.parent.id"
    | "childrenImageSharp.parent.parent.id"
    | "childrenImageSharp.parent.parent.children"
    | "childrenImageSharp.parent.children"
    | "childrenImageSharp.parent.children.id"
    | "childrenImageSharp.parent.children.children"
    | "childrenImageSharp.parent.internal.content"
    | "childrenImageSharp.parent.internal.contentDigest"
    | "childrenImageSharp.parent.internal.description"
    | "childrenImageSharp.parent.internal.fieldOwners"
    | "childrenImageSharp.parent.internal.ignoreType"
    | "childrenImageSharp.parent.internal.mediaType"
    | "childrenImageSharp.parent.internal.owner"
    | "childrenImageSharp.parent.internal.type"
    | "childrenImageSharp.children"
    | "childrenImageSharp.children.id"
    | "childrenImageSharp.children.parent.id"
    | "childrenImageSharp.children.parent.children"
    | "childrenImageSharp.children.children"
    | "childrenImageSharp.children.children.id"
    | "childrenImageSharp.children.children.children"
    | "childrenImageSharp.children.internal.content"
    | "childrenImageSharp.children.internal.contentDigest"
    | "childrenImageSharp.children.internal.description"
    | "childrenImageSharp.children.internal.fieldOwners"
    | "childrenImageSharp.children.internal.ignoreType"
    | "childrenImageSharp.children.internal.mediaType"
    | "childrenImageSharp.children.internal.owner"
    | "childrenImageSharp.children.internal.type"
    | "childrenImageSharp.internal.content"
    | "childrenImageSharp.internal.contentDigest"
    | "childrenImageSharp.internal.description"
    | "childrenImageSharp.internal.fieldOwners"
    | "childrenImageSharp.internal.ignoreType"
    | "childrenImageSharp.internal.mediaType"
    | "childrenImageSharp.internal.owner"
    | "childrenImageSharp.internal.type"
    | "childImageSharp.fixed.base64"
    | "childImageSharp.fixed.tracedSVG"
    | "childImageSharp.fixed.aspectRatio"
    | "childImageSharp.fixed.width"
    | "childImageSharp.fixed.height"
    | "childImageSharp.fixed.src"
    | "childImageSharp.fixed.srcSet"
    | "childImageSharp.fixed.srcWebp"
    | "childImageSharp.fixed.srcSetWebp"
    | "childImageSharp.fixed.originalName"
    | "childImageSharp.fluid.base64"
    | "childImageSharp.fluid.tracedSVG"
    | "childImageSharp.fluid.aspectRatio"
    | "childImageSharp.fluid.src"
    | "childImageSharp.fluid.srcSet"
    | "childImageSharp.fluid.srcWebp"
    | "childImageSharp.fluid.srcSetWebp"
    | "childImageSharp.fluid.sizes"
    | "childImageSharp.fluid.originalImg"
    | "childImageSharp.fluid.originalName"
    | "childImageSharp.fluid.presentationWidth"
    | "childImageSharp.fluid.presentationHeight"
    | "childImageSharp.gatsbyImageData"
    | "childImageSharp.original.width"
    | "childImageSharp.original.height"
    | "childImageSharp.original.src"
    | "childImageSharp.resize.src"
    | "childImageSharp.resize.tracedSVG"
    | "childImageSharp.resize.width"
    | "childImageSharp.resize.height"
    | "childImageSharp.resize.aspectRatio"
    | "childImageSharp.resize.originalName"
    | "childImageSharp.id"
    | "childImageSharp.parent.id"
    | "childImageSharp.parent.parent.id"
    | "childImageSharp.parent.parent.children"
    | "childImageSharp.parent.children"
    | "childImageSharp.parent.children.id"
    | "childImageSharp.parent.children.children"
    | "childImageSharp.parent.internal.content"
    | "childImageSharp.parent.internal.contentDigest"
    | "childImageSharp.parent.internal.description"
    | "childImageSharp.parent.internal.fieldOwners"
    | "childImageSharp.parent.internal.ignoreType"
    | "childImageSharp.parent.internal.mediaType"
    | "childImageSharp.parent.internal.owner"
    | "childImageSharp.parent.internal.type"
    | "childImageSharp.children"
    | "childImageSharp.children.id"
    | "childImageSharp.children.parent.id"
    | "childImageSharp.children.parent.children"
    | "childImageSharp.children.children"
    | "childImageSharp.children.children.id"
    | "childImageSharp.children.children.children"
    | "childImageSharp.children.internal.content"
    | "childImageSharp.children.internal.contentDigest"
    | "childImageSharp.children.internal.description"
    | "childImageSharp.children.internal.fieldOwners"
    | "childImageSharp.children.internal.ignoreType"
    | "childImageSharp.children.internal.mediaType"
    | "childImageSharp.children.internal.owner"
    | "childImageSharp.children.internal.type"
    | "childImageSharp.internal.content"
    | "childImageSharp.internal.contentDigest"
    | "childImageSharp.internal.description"
    | "childImageSharp.internal.fieldOwners"
    | "childImageSharp.internal.ignoreType"
    | "childImageSharp.internal.mediaType"
    | "childImageSharp.internal.owner"
    | "childImageSharp.internal.type"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type FileGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<FileGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type FileGroupConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_maxArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_minArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_sumArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: FileFieldsEnum;
  };

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly publicURL: Maybe<StringQueryOperatorInput>;
    readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
    readonly childImageSharp: Maybe<ImageSharpFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SortOrderEnum = "ASC" | "DESC";

  type DirectoryConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_maxArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_minArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_sumArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  type DirectoryFieldsEnum =
    | "sourceInstanceName"
    | "absolutePath"
    | "relativePath"
    | "extension"
    | "size"
    | "prettySize"
    | "modifiedTime"
    | "accessTime"
    | "changeTime"
    | "birthTime"
    | "root"
    | "dir"
    | "base"
    | "ext"
    | "name"
    | "relativeDirectory"
    | "dev"
    | "mode"
    | "nlink"
    | "uid"
    | "gid"
    | "rdev"
    | "ino"
    | "atimeMs"
    | "mtimeMs"
    | "ctimeMs"
    | "atime"
    | "mtime"
    | "ctime"
    | "birthtime"
    | "birthtimeMs"
    | "blksize"
    | "blocks"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type DirectoryGroupConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_maxArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_minArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_sumArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly author: Maybe<StringQueryOperatorInput>;
    readonly siteUrl: Maybe<StringQueryOperatorInput>;
  };

  type SiteConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_maxArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_minArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_sumArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  type SiteFieldsEnum =
    | "buildTime"
    | "siteMetadata.title"
    | "siteMetadata.description"
    | "siteMetadata.author"
    | "siteMetadata.siteUrl"
    | "port"
    | "host"
    | "polyfill"
    | "pathPrefix"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type SiteGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SiteGroupConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_maxArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_minArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_sumArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
  };

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    readonly port: Maybe<IntQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly polyfill: Maybe<BooleanQueryOperatorInput>;
    readonly pathPrefix: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteFunctionConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  };

  type SiteFunctionConnection_distinctArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_maxArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_minArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_sumArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionEdge = {
    readonly next: Maybe<SiteFunction>;
    readonly node: SiteFunction;
    readonly previous: Maybe<SiteFunction>;
  };

  type SiteFunctionFieldsEnum =
    | "functionRoute"
    | "pluginName"
    | "originalAbsoluteFilePath"
    | "originalRelativeFilePath"
    | "relativeCompiledFilePath"
    | "absoluteCompiledFilePath"
    | "matchPath"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type SiteFunctionGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SiteFunctionGroupConnection_distinctArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_maxArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_minArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_sumArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionFilterInput = {
    readonly functionRoute: Maybe<StringQueryOperatorInput>;
    readonly pluginName: Maybe<StringQueryOperatorInput>;
    readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
    readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
    readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
    readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteFunctionSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SitePageContextFilterInput = {
    readonly post: Maybe<SitePageContextPostFilterInput>;
  };

  type SitePageContextPostFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<SitePageContextPostDescriptionFilterInput>;
    readonly updatedAt: Maybe<StringQueryOperatorInput>;
    readonly eyeCatch: Maybe<SitePageContextPostEyeCatchFilterInput>;
    readonly body: Maybe<SitePageContextPostBodyFilterInput>;
  };

  type SitePageContextPostDescriptionFilterInput = {
    readonly description: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostEyeCatchFilterInput = {
    readonly file: Maybe<SitePageContextPostEyeCatchFileFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostEyeCatchFileFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostBodyFilterInput = {
    readonly childMarkdownRemark: Maybe<SitePageContextPostBodyChildMarkdownRemarkFilterInput>;
  };

  type SitePageContextPostBodyChildMarkdownRemarkFilterInput = {
    readonly html: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SitePluginPluginOptionsFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly base64Width: Maybe<IntQueryOperatorInput>;
    readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
    readonly defaultQuality: Maybe<IntQueryOperatorInput>;
    readonly failOnError: Maybe<BooleanQueryOperatorInput>;
    readonly short_name: Maybe<StringQueryOperatorInput>;
    readonly start_url: Maybe<StringQueryOperatorInput>;
    readonly display: Maybe<StringQueryOperatorInput>;
    readonly icon: Maybe<StringQueryOperatorInput>;
    readonly legacy: Maybe<BooleanQueryOperatorInput>;
    readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
    readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
    readonly crossOrigin: Maybe<StringQueryOperatorInput>;
    readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
    readonly cacheDigest: Maybe<StringQueryOperatorInput>;
    readonly spaceId: Maybe<StringQueryOperatorInput>;
    readonly accessToken: Maybe<StringQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly environment: Maybe<StringQueryOperatorInput>;
    readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
    readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
    readonly pageLimit: Maybe<IntQueryOperatorInput>;
    readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
    readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
    readonly commonmark: Maybe<BooleanQueryOperatorInput>;
    readonly footnotes: Maybe<BooleanQueryOperatorInput>;
    readonly pedantic: Maybe<BooleanQueryOperatorInput>;
    readonly gfm: Maybe<BooleanQueryOperatorInput>;
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
    readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
    readonly isTSX: Maybe<BooleanQueryOperatorInput>;
    readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly main: Maybe<StringQueryOperatorInput>;
    readonly license: Maybe<StringQueryOperatorInput>;
    readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    readonly keywords: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePageConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_maxArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_minArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_sumArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  type SitePageFieldsEnum =
    | "path"
    | "component"
    | "internalComponentName"
    | "componentChunkName"
    | "matchPath"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type"
    | "isCreatedByStatefulCreatePages"
    | "context.post.title"
    | "context.post.slug"
    | "context.post.description.description"
    | "context.post.updatedAt"
    | "context.post.eyeCatch.title"
    | "pluginCreator.resolve"
    | "pluginCreator.name"
    | "pluginCreator.version"
    | "pluginCreator.nodeAPIs"
    | "pluginCreator.browserAPIs"
    | "pluginCreator.ssrAPIs"
    | "pluginCreator.pluginFilepath"
    | "pluginCreator.pluginOptions.name"
    | "pluginCreator.pluginOptions.path"
    | "pluginCreator.pluginOptions.base64Width"
    | "pluginCreator.pluginOptions.stripMetadata"
    | "pluginCreator.pluginOptions.defaultQuality"
    | "pluginCreator.pluginOptions.failOnError"
    | "pluginCreator.pluginOptions.short_name"
    | "pluginCreator.pluginOptions.start_url"
    | "pluginCreator.pluginOptions.display"
    | "pluginCreator.pluginOptions.icon"
    | "pluginCreator.pluginOptions.legacy"
    | "pluginCreator.pluginOptions.theme_color_in_head"
    | "pluginCreator.pluginOptions.cache_busting_mode"
    | "pluginCreator.pluginOptions.crossOrigin"
    | "pluginCreator.pluginOptions.include_favicon"
    | "pluginCreator.pluginOptions.cacheDigest"
    | "pluginCreator.pluginOptions.spaceId"
    | "pluginCreator.pluginOptions.accessToken"
    | "pluginCreator.pluginOptions.host"
    | "pluginCreator.pluginOptions.environment"
    | "pluginCreator.pluginOptions.downloadLocal"
    | "pluginCreator.pluginOptions.forceFullSync"
    | "pluginCreator.pluginOptions.pageLimit"
    | "pluginCreator.pluginOptions.assetDownloadWorkers"
    | "pluginCreator.pluginOptions.useNameForId"
    | "pluginCreator.pluginOptions.commonmark"
    | "pluginCreator.pluginOptions.footnotes"
    | "pluginCreator.pluginOptions.pedantic"
    | "pluginCreator.pluginOptions.gfm"
    | "pluginCreator.pluginOptions.pathCheck"
    | "pluginCreator.pluginOptions.allExtensions"
    | "pluginCreator.pluginOptions.isTSX"
    | "pluginCreator.pluginOptions.jsxPragma"
    | "pluginCreator.packageJson.name"
    | "pluginCreator.packageJson.description"
    | "pluginCreator.packageJson.version"
    | "pluginCreator.packageJson.main"
    | "pluginCreator.packageJson.license"
    | "pluginCreator.packageJson.dependencies"
    | "pluginCreator.packageJson.dependencies.name"
    | "pluginCreator.packageJson.dependencies.version"
    | "pluginCreator.packageJson.devDependencies"
    | "pluginCreator.packageJson.devDependencies.name"
    | "pluginCreator.packageJson.devDependencies.version"
    | "pluginCreator.packageJson.peerDependencies"
    | "pluginCreator.packageJson.peerDependencies.name"
    | "pluginCreator.packageJson.peerDependencies.version"
    | "pluginCreator.packageJson.keywords"
    | "pluginCreator.id"
    | "pluginCreator.parent.id"
    | "pluginCreator.parent.parent.id"
    | "pluginCreator.parent.parent.children"
    | "pluginCreator.parent.children"
    | "pluginCreator.parent.children.id"
    | "pluginCreator.parent.children.children"
    | "pluginCreator.parent.internal.content"
    | "pluginCreator.parent.internal.contentDigest"
    | "pluginCreator.parent.internal.description"
    | "pluginCreator.parent.internal.fieldOwners"
    | "pluginCreator.parent.internal.ignoreType"
    | "pluginCreator.parent.internal.mediaType"
    | "pluginCreator.parent.internal.owner"
    | "pluginCreator.parent.internal.type"
    | "pluginCreator.children"
    | "pluginCreator.children.id"
    | "pluginCreator.children.parent.id"
    | "pluginCreator.children.parent.children"
    | "pluginCreator.children.children"
    | "pluginCreator.children.children.id"
    | "pluginCreator.children.children.children"
    | "pluginCreator.children.internal.content"
    | "pluginCreator.children.internal.contentDigest"
    | "pluginCreator.children.internal.description"
    | "pluginCreator.children.internal.fieldOwners"
    | "pluginCreator.children.internal.ignoreType"
    | "pluginCreator.children.internal.mediaType"
    | "pluginCreator.children.internal.owner"
    | "pluginCreator.children.internal.type"
    | "pluginCreator.internal.content"
    | "pluginCreator.internal.contentDigest"
    | "pluginCreator.internal.description"
    | "pluginCreator.internal.fieldOwners"
    | "pluginCreator.internal.ignoreType"
    | "pluginCreator.internal.mediaType"
    | "pluginCreator.internal.owner"
    | "pluginCreator.internal.type"
    | "pluginCreatorId";

  type SitePageGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SitePageGroupConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_maxArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_minArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_sumArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
  };

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly component: Maybe<StringQueryOperatorInput>;
    readonly internalComponentName: Maybe<StringQueryOperatorInput>;
    readonly componentChunkName: Maybe<StringQueryOperatorInput>;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    readonly context: Maybe<SitePageContextFilterInput>;
    readonly pluginCreator: Maybe<SitePluginFilterInput>;
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  };

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SitePluginConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_maxArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_minArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_sumArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  type SitePluginFieldsEnum =
    | "resolve"
    | "name"
    | "version"
    | "nodeAPIs"
    | "browserAPIs"
    | "ssrAPIs"
    | "pluginFilepath"
    | "pluginOptions.name"
    | "pluginOptions.path"
    | "pluginOptions.base64Width"
    | "pluginOptions.stripMetadata"
    | "pluginOptions.defaultQuality"
    | "pluginOptions.failOnError"
    | "pluginOptions.short_name"
    | "pluginOptions.start_url"
    | "pluginOptions.display"
    | "pluginOptions.icon"
    | "pluginOptions.legacy"
    | "pluginOptions.theme_color_in_head"
    | "pluginOptions.cache_busting_mode"
    | "pluginOptions.crossOrigin"
    | "pluginOptions.include_favicon"
    | "pluginOptions.cacheDigest"
    | "pluginOptions.spaceId"
    | "pluginOptions.accessToken"
    | "pluginOptions.host"
    | "pluginOptions.environment"
    | "pluginOptions.downloadLocal"
    | "pluginOptions.forceFullSync"
    | "pluginOptions.pageLimit"
    | "pluginOptions.assetDownloadWorkers"
    | "pluginOptions.useNameForId"
    | "pluginOptions.commonmark"
    | "pluginOptions.footnotes"
    | "pluginOptions.pedantic"
    | "pluginOptions.gfm"
    | "pluginOptions.pathCheck"
    | "pluginOptions.allExtensions"
    | "pluginOptions.isTSX"
    | "pluginOptions.jsxPragma"
    | "packageJson.name"
    | "packageJson.description"
    | "packageJson.version"
    | "packageJson.main"
    | "packageJson.license"
    | "packageJson.dependencies"
    | "packageJson.dependencies.name"
    | "packageJson.dependencies.version"
    | "packageJson.devDependencies"
    | "packageJson.devDependencies.name"
    | "packageJson.devDependencies.version"
    | "packageJson.peerDependencies"
    | "packageJson.peerDependencies.name"
    | "packageJson.peerDependencies.version"
    | "packageJson.keywords"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SitePluginGroupConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_maxArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_minArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_sumArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_maxArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_minArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_sumArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  type SiteBuildMetadataFieldsEnum =
    | "buildTime"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SiteBuildMetadataGroupConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_maxArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_minArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_sumArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type ImageSharpConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_maxArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_minArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_sumArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  type ImageSharpFieldsEnum =
    | "fixed.base64"
    | "fixed.tracedSVG"
    | "fixed.aspectRatio"
    | "fixed.width"
    | "fixed.height"
    | "fixed.src"
    | "fixed.srcSet"
    | "fixed.srcWebp"
    | "fixed.srcSetWebp"
    | "fixed.originalName"
    | "fluid.base64"
    | "fluid.tracedSVG"
    | "fluid.aspectRatio"
    | "fluid.src"
    | "fluid.srcSet"
    | "fluid.srcWebp"
    | "fluid.srcSetWebp"
    | "fluid.sizes"
    | "fluid.originalImg"
    | "fluid.originalName"
    | "fluid.presentationWidth"
    | "fluid.presentationHeight"
    | "gatsbyImageData"
    | "original.width"
    | "original.height"
    | "original.src"
    | "resize.src"
    | "resize.tracedSVG"
    | "resize.width"
    | "resize.height"
    | "resize.aspectRatio"
    | "resize.originalName"
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ImageSharpGroupConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_maxArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_minArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_sumArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type MarkdownRemarkFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
  };

  type MarkdownHeadingFilterListInput = {
    readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
  };

  type MarkdownHeadingFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly value: Maybe<StringQueryOperatorInput>;
    readonly depth: Maybe<IntQueryOperatorInput>;
  };

  type MarkdownWordCountFilterInput = {
    readonly paragraphs: Maybe<IntQueryOperatorInput>;
    readonly sentences: Maybe<IntQueryOperatorInput>;
    readonly words: Maybe<IntQueryOperatorInput>;
  };

  type MarkdownRemarkConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
    readonly nodes: ReadonlyArray<MarkdownRemark>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  };

  type MarkdownRemarkConnection_distinctArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkConnection_maxArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkConnection_minArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkConnection_sumArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkEdge = {
    readonly next: Maybe<MarkdownRemark>;
    readonly node: MarkdownRemark;
    readonly previous: Maybe<MarkdownRemark>;
  };

  type MarkdownRemarkFieldsEnum =
    | "id"
    | "frontmatter.title"
    | "excerpt"
    | "rawMarkdownBody"
    | "html"
    | "htmlAst"
    | "excerptAst"
    | "headings"
    | "headings.id"
    | "headings.value"
    | "headings.depth"
    | "timeToRead"
    | "tableOfContents"
    | "wordCount.paragraphs"
    | "wordCount.sentences"
    | "wordCount.words"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type MarkdownRemarkGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
    readonly nodes: ReadonlyArray<MarkdownRemark>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type MarkdownRemarkGroupConnection_distinctArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkGroupConnection_maxArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkGroupConnection_minArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkGroupConnection_sumArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    readonly excerpt: Maybe<StringQueryOperatorInput>;
    readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
    readonly html: Maybe<StringQueryOperatorInput>;
    readonly htmlAst: Maybe<JSONQueryOperatorInput>;
    readonly excerptAst: Maybe<JSONQueryOperatorInput>;
    readonly headings: Maybe<MarkdownHeadingFilterListInput>;
    readonly timeToRead: Maybe<IntQueryOperatorInput>;
    readonly tableOfContents: Maybe<StringQueryOperatorInput>;
    readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type MarkdownRemarkSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type ContentfulEntryConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulEntryEdge>;
    readonly nodes: ReadonlyArray<ContentfulEntry>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  };

  type ContentfulEntryConnection_distinctArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryConnection_maxArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryConnection_minArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryConnection_sumArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryEdge = {
    readonly next: Maybe<ContentfulEntry>;
    readonly node: ContentfulEntry;
    readonly previous: Maybe<ContentfulEntry>;
  };

  type ContentfulEntryFieldsEnum =
    | "contentful_id"
    | "id"
    | "node_locale"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type ContentfulEntryGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulEntryEdge>;
    readonly nodes: ReadonlyArray<ContentfulEntry>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ContentfulEntryGroupConnection_distinctArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryGroupConnection_maxArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryGroupConnection_minArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryGroupConnection_sumArgs = {
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulEntryFieldsEnum;
  };

  type ContentfulEntryFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly node_locale: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ContentfulEntrySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type ContentfulAssetFileFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
    readonly fileName: Maybe<StringQueryOperatorInput>;
    readonly contentType: Maybe<StringQueryOperatorInput>;
  };

  type ContentfulAssetFileDetailsFilterInput = {
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
  };

  type ContentfulAssetFileDetailsImageFilterInput = {
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
  };

  type ContentfulAssetSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly revision: Maybe<IntQueryOperatorInput>;
  };

  type ContentfulFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  };

  type ContentfulFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
  };

  type ContentfulResizeFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  };

  type ContentfulAssetConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulAssetEdge>;
    readonly nodes: ReadonlyArray<ContentfulAsset>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  };

  type ContentfulAssetConnection_distinctArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetConnection_maxArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetConnection_minArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetConnection_sumArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetEdge = {
    readonly next: Maybe<ContentfulAsset>;
    readonly node: ContentfulAsset;
    readonly previous: Maybe<ContentfulAsset>;
  };

  type ContentfulAssetFieldsEnum =
    | "contentful_id"
    | "id"
    | "spaceId"
    | "createdAt"
    | "updatedAt"
    | "file.url"
    | "file.details.size"
    | "file.details.image.width"
    | "file.details.image.height"
    | "file.fileName"
    | "file.contentType"
    | "title"
    | "description"
    | "node_locale"
    | "sys.type"
    | "sys.revision"
    | "fixed.base64"
    | "fixed.tracedSVG"
    | "fixed.aspectRatio"
    | "fixed.width"
    | "fixed.height"
    | "fixed.src"
    | "fixed.srcSet"
    | "fixed.srcWebp"
    | "fixed.srcSetWebp"
    | "fluid.base64"
    | "fluid.tracedSVG"
    | "fluid.aspectRatio"
    | "fluid.src"
    | "fluid.srcSet"
    | "fluid.srcWebp"
    | "fluid.srcSetWebp"
    | "fluid.sizes"
    | "gatsbyImageData"
    | "resize.base64"
    | "resize.tracedSVG"
    | "resize.src"
    | "resize.width"
    | "resize.height"
    | "resize.aspectRatio"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type ContentfulAssetGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulAssetEdge>;
    readonly nodes: ReadonlyArray<ContentfulAsset>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ContentfulAssetGroupConnection_distinctArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetGroupConnection_maxArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetGroupConnection_minArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetGroupConnection_sumArgs = {
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulAssetFieldsEnum;
  };

  type ContentfulAssetFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly spaceId: Maybe<StringQueryOperatorInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly file: Maybe<ContentfulAssetFileFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly node_locale: Maybe<StringQueryOperatorInput>;
    readonly sys: Maybe<ContentfulAssetSysFilterInput>;
    readonly fixed: Maybe<ContentfulFixedFilterInput>;
    readonly fluid: Maybe<ContentfulFluidFilterInput>;
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
    readonly resize: Maybe<ContentfulResizeFilterInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ContentfulAssetSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type contentfulPostDescriptionTextNodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly sys: Maybe<contentfulPostDescriptionTextNodeSysFilterInput>;
    readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
    readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  };

  type contentfulPostDescriptionTextNodeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type MarkdownRemarkFilterListInput = {
    readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
  };

  type contentfulPostBodyTextNodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly body: Maybe<StringQueryOperatorInput>;
    readonly sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
    readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
    readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  };

  type contentfulPostBodyTextNodeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type ContentfulPostSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly revision: Maybe<IntQueryOperatorInput>;
    readonly contentType: Maybe<ContentfulPostSysContentTypeFilterInput>;
  };

  type ContentfulPostSysContentTypeFilterInput = {
    readonly sys: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
  };

  type ContentfulPostSysContentTypeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly linkType: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
  };

  type contentfulPostDescriptionTextNodeFilterListInput = {
    readonly elemMatch: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
  };

  type contentfulPostBodyTextNodeFilterListInput = {
    readonly elemMatch: Maybe<contentfulPostBodyTextNodeFilterInput>;
  };

  type ContentfulPostConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulPostEdge>;
    readonly nodes: ReadonlyArray<ContentfulPost>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
  };

  type ContentfulPostConnection_distinctArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostConnection_maxArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostConnection_minArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostConnection_sumArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostEdge = {
    readonly next: Maybe<ContentfulPost>;
    readonly node: ContentfulPost;
    readonly previous: Maybe<ContentfulPost>;
  };

  type ContentfulPostFieldsEnum =
    | "contentful_id"
    | "id"
    | "node_locale"
    | "title"
    | "slug"
    | "description.id"
    | "description.parent.id"
    | "description.parent.parent.id"
    | "description.parent.parent.children"
    | "description.parent.children"
    | "description.parent.children.id"
    | "description.parent.children.children"
    | "description.parent.internal.content"
    | "description.parent.internal.contentDigest"
    | "description.parent.internal.description"
    | "description.parent.internal.fieldOwners"
    | "description.parent.internal.ignoreType"
    | "description.parent.internal.mediaType"
    | "description.parent.internal.owner"
    | "description.parent.internal.type"
    | "description.children"
    | "description.children.id"
    | "description.children.parent.id"
    | "description.children.parent.children"
    | "description.children.children"
    | "description.children.children.id"
    | "description.children.children.children"
    | "description.children.internal.content"
    | "description.children.internal.contentDigest"
    | "description.children.internal.description"
    | "description.children.internal.fieldOwners"
    | "description.children.internal.ignoreType"
    | "description.children.internal.mediaType"
    | "description.children.internal.owner"
    | "description.children.internal.type"
    | "description.internal.content"
    | "description.internal.contentDigest"
    | "description.internal.description"
    | "description.internal.fieldOwners"
    | "description.internal.ignoreType"
    | "description.internal.mediaType"
    | "description.internal.owner"
    | "description.internal.type"
    | "description.description"
    | "description.sys.type"
    | "description.childrenMarkdownRemark"
    | "description.childrenMarkdownRemark.id"
    | "description.childrenMarkdownRemark.frontmatter.title"
    | "description.childrenMarkdownRemark.excerpt"
    | "description.childrenMarkdownRemark.rawMarkdownBody"
    | "description.childrenMarkdownRemark.html"
    | "description.childrenMarkdownRemark.htmlAst"
    | "description.childrenMarkdownRemark.excerptAst"
    | "description.childrenMarkdownRemark.headings"
    | "description.childrenMarkdownRemark.headings.id"
    | "description.childrenMarkdownRemark.headings.value"
    | "description.childrenMarkdownRemark.headings.depth"
    | "description.childrenMarkdownRemark.timeToRead"
    | "description.childrenMarkdownRemark.tableOfContents"
    | "description.childrenMarkdownRemark.wordCount.paragraphs"
    | "description.childrenMarkdownRemark.wordCount.sentences"
    | "description.childrenMarkdownRemark.wordCount.words"
    | "description.childrenMarkdownRemark.parent.id"
    | "description.childrenMarkdownRemark.parent.children"
    | "description.childrenMarkdownRemark.children"
    | "description.childrenMarkdownRemark.children.id"
    | "description.childrenMarkdownRemark.children.children"
    | "description.childrenMarkdownRemark.internal.content"
    | "description.childrenMarkdownRemark.internal.contentDigest"
    | "description.childrenMarkdownRemark.internal.description"
    | "description.childrenMarkdownRemark.internal.fieldOwners"
    | "description.childrenMarkdownRemark.internal.ignoreType"
    | "description.childrenMarkdownRemark.internal.mediaType"
    | "description.childrenMarkdownRemark.internal.owner"
    | "description.childrenMarkdownRemark.internal.type"
    | "description.childMarkdownRemark.id"
    | "description.childMarkdownRemark.frontmatter.title"
    | "description.childMarkdownRemark.excerpt"
    | "description.childMarkdownRemark.rawMarkdownBody"
    | "description.childMarkdownRemark.html"
    | "description.childMarkdownRemark.htmlAst"
    | "description.childMarkdownRemark.excerptAst"
    | "description.childMarkdownRemark.headings"
    | "description.childMarkdownRemark.headings.id"
    | "description.childMarkdownRemark.headings.value"
    | "description.childMarkdownRemark.headings.depth"
    | "description.childMarkdownRemark.timeToRead"
    | "description.childMarkdownRemark.tableOfContents"
    | "description.childMarkdownRemark.wordCount.paragraphs"
    | "description.childMarkdownRemark.wordCount.sentences"
    | "description.childMarkdownRemark.wordCount.words"
    | "description.childMarkdownRemark.parent.id"
    | "description.childMarkdownRemark.parent.children"
    | "description.childMarkdownRemark.children"
    | "description.childMarkdownRemark.children.id"
    | "description.childMarkdownRemark.children.children"
    | "description.childMarkdownRemark.internal.content"
    | "description.childMarkdownRemark.internal.contentDigest"
    | "description.childMarkdownRemark.internal.description"
    | "description.childMarkdownRemark.internal.fieldOwners"
    | "description.childMarkdownRemark.internal.ignoreType"
    | "description.childMarkdownRemark.internal.mediaType"
    | "description.childMarkdownRemark.internal.owner"
    | "description.childMarkdownRemark.internal.type"
    | "body.id"
    | "body.parent.id"
    | "body.parent.parent.id"
    | "body.parent.parent.children"
    | "body.parent.children"
    | "body.parent.children.id"
    | "body.parent.children.children"
    | "body.parent.internal.content"
    | "body.parent.internal.contentDigest"
    | "body.parent.internal.description"
    | "body.parent.internal.fieldOwners"
    | "body.parent.internal.ignoreType"
    | "body.parent.internal.mediaType"
    | "body.parent.internal.owner"
    | "body.parent.internal.type"
    | "body.children"
    | "body.children.id"
    | "body.children.parent.id"
    | "body.children.parent.children"
    | "body.children.children"
    | "body.children.children.id"
    | "body.children.children.children"
    | "body.children.internal.content"
    | "body.children.internal.contentDigest"
    | "body.children.internal.description"
    | "body.children.internal.fieldOwners"
    | "body.children.internal.ignoreType"
    | "body.children.internal.mediaType"
    | "body.children.internal.owner"
    | "body.children.internal.type"
    | "body.internal.content"
    | "body.internal.contentDigest"
    | "body.internal.description"
    | "body.internal.fieldOwners"
    | "body.internal.ignoreType"
    | "body.internal.mediaType"
    | "body.internal.owner"
    | "body.internal.type"
    | "body.body"
    | "body.sys.type"
    | "body.childrenMarkdownRemark"
    | "body.childrenMarkdownRemark.id"
    | "body.childrenMarkdownRemark.frontmatter.title"
    | "body.childrenMarkdownRemark.excerpt"
    | "body.childrenMarkdownRemark.rawMarkdownBody"
    | "body.childrenMarkdownRemark.html"
    | "body.childrenMarkdownRemark.htmlAst"
    | "body.childrenMarkdownRemark.excerptAst"
    | "body.childrenMarkdownRemark.headings"
    | "body.childrenMarkdownRemark.headings.id"
    | "body.childrenMarkdownRemark.headings.value"
    | "body.childrenMarkdownRemark.headings.depth"
    | "body.childrenMarkdownRemark.timeToRead"
    | "body.childrenMarkdownRemark.tableOfContents"
    | "body.childrenMarkdownRemark.wordCount.paragraphs"
    | "body.childrenMarkdownRemark.wordCount.sentences"
    | "body.childrenMarkdownRemark.wordCount.words"
    | "body.childrenMarkdownRemark.parent.id"
    | "body.childrenMarkdownRemark.parent.children"
    | "body.childrenMarkdownRemark.children"
    | "body.childrenMarkdownRemark.children.id"
    | "body.childrenMarkdownRemark.children.children"
    | "body.childrenMarkdownRemark.internal.content"
    | "body.childrenMarkdownRemark.internal.contentDigest"
    | "body.childrenMarkdownRemark.internal.description"
    | "body.childrenMarkdownRemark.internal.fieldOwners"
    | "body.childrenMarkdownRemark.internal.ignoreType"
    | "body.childrenMarkdownRemark.internal.mediaType"
    | "body.childrenMarkdownRemark.internal.owner"
    | "body.childrenMarkdownRemark.internal.type"
    | "body.childMarkdownRemark.id"
    | "body.childMarkdownRemark.frontmatter.title"
    | "body.childMarkdownRemark.excerpt"
    | "body.childMarkdownRemark.rawMarkdownBody"
    | "body.childMarkdownRemark.html"
    | "body.childMarkdownRemark.htmlAst"
    | "body.childMarkdownRemark.excerptAst"
    | "body.childMarkdownRemark.headings"
    | "body.childMarkdownRemark.headings.id"
    | "body.childMarkdownRemark.headings.value"
    | "body.childMarkdownRemark.headings.depth"
    | "body.childMarkdownRemark.timeToRead"
    | "body.childMarkdownRemark.tableOfContents"
    | "body.childMarkdownRemark.wordCount.paragraphs"
    | "body.childMarkdownRemark.wordCount.sentences"
    | "body.childMarkdownRemark.wordCount.words"
    | "body.childMarkdownRemark.parent.id"
    | "body.childMarkdownRemark.parent.children"
    | "body.childMarkdownRemark.children"
    | "body.childMarkdownRemark.children.id"
    | "body.childMarkdownRemark.children.children"
    | "body.childMarkdownRemark.internal.content"
    | "body.childMarkdownRemark.internal.contentDigest"
    | "body.childMarkdownRemark.internal.description"
    | "body.childMarkdownRemark.internal.fieldOwners"
    | "body.childMarkdownRemark.internal.ignoreType"
    | "body.childMarkdownRemark.internal.mediaType"
    | "body.childMarkdownRemark.internal.owner"
    | "body.childMarkdownRemark.internal.type"
    | "spaceId"
    | "createdAt"
    | "updatedAt"
    | "sys.type"
    | "sys.revision"
    | "sys.contentType.sys.type"
    | "sys.contentType.sys.linkType"
    | "sys.contentType.sys.id"
    | "eyeCatch.contentful_id"
    | "eyeCatch.id"
    | "eyeCatch.spaceId"
    | "eyeCatch.createdAt"
    | "eyeCatch.updatedAt"
    | "eyeCatch.file.url"
    | "eyeCatch.file.details.size"
    | "eyeCatch.file.fileName"
    | "eyeCatch.file.contentType"
    | "eyeCatch.title"
    | "eyeCatch.description"
    | "eyeCatch.node_locale"
    | "eyeCatch.sys.type"
    | "eyeCatch.sys.revision"
    | "eyeCatch.fixed.base64"
    | "eyeCatch.fixed.tracedSVG"
    | "eyeCatch.fixed.aspectRatio"
    | "eyeCatch.fixed.width"
    | "eyeCatch.fixed.height"
    | "eyeCatch.fixed.src"
    | "eyeCatch.fixed.srcSet"
    | "eyeCatch.fixed.srcWebp"
    | "eyeCatch.fixed.srcSetWebp"
    | "eyeCatch.fluid.base64"
    | "eyeCatch.fluid.tracedSVG"
    | "eyeCatch.fluid.aspectRatio"
    | "eyeCatch.fluid.src"
    | "eyeCatch.fluid.srcSet"
    | "eyeCatch.fluid.srcWebp"
    | "eyeCatch.fluid.srcSetWebp"
    | "eyeCatch.fluid.sizes"
    | "eyeCatch.gatsbyImageData"
    | "eyeCatch.resize.base64"
    | "eyeCatch.resize.tracedSVG"
    | "eyeCatch.resize.src"
    | "eyeCatch.resize.width"
    | "eyeCatch.resize.height"
    | "eyeCatch.resize.aspectRatio"
    | "eyeCatch.parent.id"
    | "eyeCatch.parent.parent.id"
    | "eyeCatch.parent.parent.children"
    | "eyeCatch.parent.children"
    | "eyeCatch.parent.children.id"
    | "eyeCatch.parent.children.children"
    | "eyeCatch.parent.internal.content"
    | "eyeCatch.parent.internal.contentDigest"
    | "eyeCatch.parent.internal.description"
    | "eyeCatch.parent.internal.fieldOwners"
    | "eyeCatch.parent.internal.ignoreType"
    | "eyeCatch.parent.internal.mediaType"
    | "eyeCatch.parent.internal.owner"
    | "eyeCatch.parent.internal.type"
    | "eyeCatch.children"
    | "eyeCatch.children.id"
    | "eyeCatch.children.parent.id"
    | "eyeCatch.children.parent.children"
    | "eyeCatch.children.children"
    | "eyeCatch.children.children.id"
    | "eyeCatch.children.children.children"
    | "eyeCatch.children.internal.content"
    | "eyeCatch.children.internal.contentDigest"
    | "eyeCatch.children.internal.description"
    | "eyeCatch.children.internal.fieldOwners"
    | "eyeCatch.children.internal.ignoreType"
    | "eyeCatch.children.internal.mediaType"
    | "eyeCatch.children.internal.owner"
    | "eyeCatch.children.internal.type"
    | "eyeCatch.internal.content"
    | "eyeCatch.internal.contentDigest"
    | "eyeCatch.internal.description"
    | "eyeCatch.internal.fieldOwners"
    | "eyeCatch.internal.ignoreType"
    | "eyeCatch.internal.mediaType"
    | "eyeCatch.internal.owner"
    | "eyeCatch.internal.type"
    | "childrenContentfulPostDescriptionTextNode"
    | "childrenContentfulPostDescriptionTextNode.id"
    | "childrenContentfulPostDescriptionTextNode.parent.id"
    | "childrenContentfulPostDescriptionTextNode.parent.parent.id"
    | "childrenContentfulPostDescriptionTextNode.parent.parent.children"
    | "childrenContentfulPostDescriptionTextNode.parent.children"
    | "childrenContentfulPostDescriptionTextNode.parent.children.id"
    | "childrenContentfulPostDescriptionTextNode.parent.children.children"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.content"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.contentDigest"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.description"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.fieldOwners"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.ignoreType"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.mediaType"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.owner"
    | "childrenContentfulPostDescriptionTextNode.parent.internal.type"
    | "childrenContentfulPostDescriptionTextNode.children"
    | "childrenContentfulPostDescriptionTextNode.children.id"
    | "childrenContentfulPostDescriptionTextNode.children.parent.id"
    | "childrenContentfulPostDescriptionTextNode.children.parent.children"
    | "childrenContentfulPostDescriptionTextNode.children.children"
    | "childrenContentfulPostDescriptionTextNode.children.children.id"
    | "childrenContentfulPostDescriptionTextNode.children.children.children"
    | "childrenContentfulPostDescriptionTextNode.children.internal.content"
    | "childrenContentfulPostDescriptionTextNode.children.internal.contentDigest"
    | "childrenContentfulPostDescriptionTextNode.children.internal.description"
    | "childrenContentfulPostDescriptionTextNode.children.internal.fieldOwners"
    | "childrenContentfulPostDescriptionTextNode.children.internal.ignoreType"
    | "childrenContentfulPostDescriptionTextNode.children.internal.mediaType"
    | "childrenContentfulPostDescriptionTextNode.children.internal.owner"
    | "childrenContentfulPostDescriptionTextNode.children.internal.type"
    | "childrenContentfulPostDescriptionTextNode.internal.content"
    | "childrenContentfulPostDescriptionTextNode.internal.contentDigest"
    | "childrenContentfulPostDescriptionTextNode.internal.description"
    | "childrenContentfulPostDescriptionTextNode.internal.fieldOwners"
    | "childrenContentfulPostDescriptionTextNode.internal.ignoreType"
    | "childrenContentfulPostDescriptionTextNode.internal.mediaType"
    | "childrenContentfulPostDescriptionTextNode.internal.owner"
    | "childrenContentfulPostDescriptionTextNode.internal.type"
    | "childrenContentfulPostDescriptionTextNode.description"
    | "childrenContentfulPostDescriptionTextNode.sys.type"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.id"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.excerpt"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.html"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.htmlAst"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.excerptAst"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.id"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.value"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.depth"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.timeToRead"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.parent.id"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.parent.children"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.children"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.children.id"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.children.children"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.content"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.description"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.owner"
    | "childrenContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.type"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.id"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.frontmatter.title"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.excerpt"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.html"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.htmlAst"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.excerptAst"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.headings"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.headings.id"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.headings.value"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.headings.depth"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.timeToRead"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.tableOfContents"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.words"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.parent.id"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.parent.children"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.children"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.children.id"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.children.children"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.content"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.description"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.mediaType"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.owner"
    | "childrenContentfulPostDescriptionTextNode.childMarkdownRemark.internal.type"
    | "childContentfulPostDescriptionTextNode.id"
    | "childContentfulPostDescriptionTextNode.parent.id"
    | "childContentfulPostDescriptionTextNode.parent.parent.id"
    | "childContentfulPostDescriptionTextNode.parent.parent.children"
    | "childContentfulPostDescriptionTextNode.parent.children"
    | "childContentfulPostDescriptionTextNode.parent.children.id"
    | "childContentfulPostDescriptionTextNode.parent.children.children"
    | "childContentfulPostDescriptionTextNode.parent.internal.content"
    | "childContentfulPostDescriptionTextNode.parent.internal.contentDigest"
    | "childContentfulPostDescriptionTextNode.parent.internal.description"
    | "childContentfulPostDescriptionTextNode.parent.internal.fieldOwners"
    | "childContentfulPostDescriptionTextNode.parent.internal.ignoreType"
    | "childContentfulPostDescriptionTextNode.parent.internal.mediaType"
    | "childContentfulPostDescriptionTextNode.parent.internal.owner"
    | "childContentfulPostDescriptionTextNode.parent.internal.type"
    | "childContentfulPostDescriptionTextNode.children"
    | "childContentfulPostDescriptionTextNode.children.id"
    | "childContentfulPostDescriptionTextNode.children.parent.id"
    | "childContentfulPostDescriptionTextNode.children.parent.children"
    | "childContentfulPostDescriptionTextNode.children.children"
    | "childContentfulPostDescriptionTextNode.children.children.id"
    | "childContentfulPostDescriptionTextNode.children.children.children"
    | "childContentfulPostDescriptionTextNode.children.internal.content"
    | "childContentfulPostDescriptionTextNode.children.internal.contentDigest"
    | "childContentfulPostDescriptionTextNode.children.internal.description"
    | "childContentfulPostDescriptionTextNode.children.internal.fieldOwners"
    | "childContentfulPostDescriptionTextNode.children.internal.ignoreType"
    | "childContentfulPostDescriptionTextNode.children.internal.mediaType"
    | "childContentfulPostDescriptionTextNode.children.internal.owner"
    | "childContentfulPostDescriptionTextNode.children.internal.type"
    | "childContentfulPostDescriptionTextNode.internal.content"
    | "childContentfulPostDescriptionTextNode.internal.contentDigest"
    | "childContentfulPostDescriptionTextNode.internal.description"
    | "childContentfulPostDescriptionTextNode.internal.fieldOwners"
    | "childContentfulPostDescriptionTextNode.internal.ignoreType"
    | "childContentfulPostDescriptionTextNode.internal.mediaType"
    | "childContentfulPostDescriptionTextNode.internal.owner"
    | "childContentfulPostDescriptionTextNode.internal.type"
    | "childContentfulPostDescriptionTextNode.description"
    | "childContentfulPostDescriptionTextNode.sys.type"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.id"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.excerpt"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.html"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.htmlAst"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.excerptAst"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.id"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.value"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.headings.depth"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.timeToRead"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.parent.id"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.parent.children"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.children"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.children.id"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.children.children"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.content"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.description"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.owner"
    | "childContentfulPostDescriptionTextNode.childrenMarkdownRemark.internal.type"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.id"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.frontmatter.title"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.excerpt"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.html"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.htmlAst"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.excerptAst"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.headings"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.headings.id"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.headings.value"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.headings.depth"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.timeToRead"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.tableOfContents"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.wordCount.words"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.parent.id"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.parent.children"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.children"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.children.id"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.children.children"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.content"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.description"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.mediaType"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.owner"
    | "childContentfulPostDescriptionTextNode.childMarkdownRemark.internal.type"
    | "childrenContentfulPostBodyTextNode"
    | "childrenContentfulPostBodyTextNode.id"
    | "childrenContentfulPostBodyTextNode.parent.id"
    | "childrenContentfulPostBodyTextNode.parent.parent.id"
    | "childrenContentfulPostBodyTextNode.parent.parent.children"
    | "childrenContentfulPostBodyTextNode.parent.children"
    | "childrenContentfulPostBodyTextNode.parent.children.id"
    | "childrenContentfulPostBodyTextNode.parent.children.children"
    | "childrenContentfulPostBodyTextNode.parent.internal.content"
    | "childrenContentfulPostBodyTextNode.parent.internal.contentDigest"
    | "childrenContentfulPostBodyTextNode.parent.internal.description"
    | "childrenContentfulPostBodyTextNode.parent.internal.fieldOwners"
    | "childrenContentfulPostBodyTextNode.parent.internal.ignoreType"
    | "childrenContentfulPostBodyTextNode.parent.internal.mediaType"
    | "childrenContentfulPostBodyTextNode.parent.internal.owner"
    | "childrenContentfulPostBodyTextNode.parent.internal.type"
    | "childrenContentfulPostBodyTextNode.children"
    | "childrenContentfulPostBodyTextNode.children.id"
    | "childrenContentfulPostBodyTextNode.children.parent.id"
    | "childrenContentfulPostBodyTextNode.children.parent.children"
    | "childrenContentfulPostBodyTextNode.children.children"
    | "childrenContentfulPostBodyTextNode.children.children.id"
    | "childrenContentfulPostBodyTextNode.children.children.children"
    | "childrenContentfulPostBodyTextNode.children.internal.content"
    | "childrenContentfulPostBodyTextNode.children.internal.contentDigest"
    | "childrenContentfulPostBodyTextNode.children.internal.description"
    | "childrenContentfulPostBodyTextNode.children.internal.fieldOwners"
    | "childrenContentfulPostBodyTextNode.children.internal.ignoreType"
    | "childrenContentfulPostBodyTextNode.children.internal.mediaType"
    | "childrenContentfulPostBodyTextNode.children.internal.owner"
    | "childrenContentfulPostBodyTextNode.children.internal.type"
    | "childrenContentfulPostBodyTextNode.internal.content"
    | "childrenContentfulPostBodyTextNode.internal.contentDigest"
    | "childrenContentfulPostBodyTextNode.internal.description"
    | "childrenContentfulPostBodyTextNode.internal.fieldOwners"
    | "childrenContentfulPostBodyTextNode.internal.ignoreType"
    | "childrenContentfulPostBodyTextNode.internal.mediaType"
    | "childrenContentfulPostBodyTextNode.internal.owner"
    | "childrenContentfulPostBodyTextNode.internal.type"
    | "childrenContentfulPostBodyTextNode.body"
    | "childrenContentfulPostBodyTextNode.sys.type"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.id"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.frontmatter.title"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.excerpt"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.html"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.htmlAst"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.excerptAst"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.headings"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.headings.id"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.headings.value"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.headings.depth"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.timeToRead"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.tableOfContents"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.words"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.parent.id"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.parent.children"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.children"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.children.id"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.children.children"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.content"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.description"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.mediaType"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.owner"
    | "childrenContentfulPostBodyTextNode.childrenMarkdownRemark.internal.type"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.id"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.frontmatter.title"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.excerpt"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.rawMarkdownBody"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.html"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.htmlAst"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.excerptAst"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.headings"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.headings.id"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.headings.value"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.headings.depth"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.timeToRead"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.tableOfContents"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.wordCount.sentences"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.wordCount.words"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.parent.id"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.parent.children"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.children"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.children.id"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.children.children"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.content"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.contentDigest"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.description"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.fieldOwners"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.ignoreType"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.mediaType"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.owner"
    | "childrenContentfulPostBodyTextNode.childMarkdownRemark.internal.type"
    | "childContentfulPostBodyTextNode.id"
    | "childContentfulPostBodyTextNode.parent.id"
    | "childContentfulPostBodyTextNode.parent.parent.id"
    | "childContentfulPostBodyTextNode.parent.parent.children"
    | "childContentfulPostBodyTextNode.parent.children"
    | "childContentfulPostBodyTextNode.parent.children.id"
    | "childContentfulPostBodyTextNode.parent.children.children"
    | "childContentfulPostBodyTextNode.parent.internal.content"
    | "childContentfulPostBodyTextNode.parent.internal.contentDigest"
    | "childContentfulPostBodyTextNode.parent.internal.description"
    | "childContentfulPostBodyTextNode.parent.internal.fieldOwners"
    | "childContentfulPostBodyTextNode.parent.internal.ignoreType"
    | "childContentfulPostBodyTextNode.parent.internal.mediaType"
    | "childContentfulPostBodyTextNode.parent.internal.owner"
    | "childContentfulPostBodyTextNode.parent.internal.type"
    | "childContentfulPostBodyTextNode.children"
    | "childContentfulPostBodyTextNode.children.id"
    | "childContentfulPostBodyTextNode.children.parent.id"
    | "childContentfulPostBodyTextNode.children.parent.children"
    | "childContentfulPostBodyTextNode.children.children"
    | "childContentfulPostBodyTextNode.children.children.id"
    | "childContentfulPostBodyTextNode.children.children.children"
    | "childContentfulPostBodyTextNode.children.internal.content"
    | "childContentfulPostBodyTextNode.children.internal.contentDigest"
    | "childContentfulPostBodyTextNode.children.internal.description"
    | "childContentfulPostBodyTextNode.children.internal.fieldOwners"
    | "childContentfulPostBodyTextNode.children.internal.ignoreType"
    | "childContentfulPostBodyTextNode.children.internal.mediaType"
    | "childContentfulPostBodyTextNode.children.internal.owner"
    | "childContentfulPostBodyTextNode.children.internal.type"
    | "childContentfulPostBodyTextNode.internal.content"
    | "childContentfulPostBodyTextNode.internal.contentDigest"
    | "childContentfulPostBodyTextNode.internal.description"
    | "childContentfulPostBodyTextNode.internal.fieldOwners"
    | "childContentfulPostBodyTextNode.internal.ignoreType"
    | "childContentfulPostBodyTextNode.internal.mediaType"
    | "childContentfulPostBodyTextNode.internal.owner"
    | "childContentfulPostBodyTextNode.internal.type"
    | "childContentfulPostBodyTextNode.body"
    | "childContentfulPostBodyTextNode.sys.type"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.id"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.frontmatter.title"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.excerpt"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.html"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.htmlAst"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.excerptAst"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.headings"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.headings.id"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.headings.value"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.headings.depth"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.timeToRead"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.tableOfContents"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.wordCount.words"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.parent.id"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.parent.children"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.children"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.children.id"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.children.children"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.content"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.description"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.mediaType"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.owner"
    | "childContentfulPostBodyTextNode.childrenMarkdownRemark.internal.type"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.id"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.frontmatter.title"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.excerpt"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.rawMarkdownBody"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.html"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.htmlAst"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.excerptAst"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.headings"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.headings.id"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.headings.value"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.headings.depth"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.timeToRead"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.tableOfContents"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.sentences"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.words"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.parent.id"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.parent.children"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.children"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.children.id"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.children.children"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.content"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.contentDigest"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.description"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.fieldOwners"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.ignoreType"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.mediaType"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.owner"
    | "childContentfulPostBodyTextNode.childMarkdownRemark.internal.type"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type";

  type ContentfulPostGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulPostEdge>;
    readonly nodes: ReadonlyArray<ContentfulPost>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ContentfulPostGroupConnection_distinctArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostGroupConnection_maxArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostGroupConnection_minArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostGroupConnection_sumArgs = {
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulPostFieldsEnum;
  };

  type ContentfulPostFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly node_locale: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
    readonly body: Maybe<contentfulPostBodyTextNodeFilterInput>;
    readonly spaceId: Maybe<StringQueryOperatorInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly sys: Maybe<ContentfulPostSysFilterInput>;
    readonly eyeCatch: Maybe<ContentfulAssetFilterInput>;
    readonly childrenContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterListInput>;
    readonly childContentfulPostDescriptionTextNode: Maybe<contentfulPostDescriptionTextNodeFilterInput>;
    readonly childrenContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterListInput>;
    readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ContentfulPostSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type contentfulPostDescriptionTextNodeConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<contentfulPostDescriptionTextNodeEdge>;
    readonly nodes: ReadonlyArray<contentfulPostDescriptionTextNode>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<contentfulPostDescriptionTextNodeGroupConnection>;
  };

  type contentfulPostDescriptionTextNodeConnection_distinctArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeConnection_maxArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeConnection_minArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeConnection_sumArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeEdge = {
    readonly next: Maybe<contentfulPostDescriptionTextNode>;
    readonly node: contentfulPostDescriptionTextNode;
    readonly previous: Maybe<contentfulPostDescriptionTextNode>;
  };

  type contentfulPostDescriptionTextNodeFieldsEnum =
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type"
    | "description"
    | "sys.type"
    | "childrenMarkdownRemark"
    | "childrenMarkdownRemark.id"
    | "childrenMarkdownRemark.frontmatter.title"
    | "childrenMarkdownRemark.excerpt"
    | "childrenMarkdownRemark.rawMarkdownBody"
    | "childrenMarkdownRemark.html"
    | "childrenMarkdownRemark.htmlAst"
    | "childrenMarkdownRemark.excerptAst"
    | "childrenMarkdownRemark.headings"
    | "childrenMarkdownRemark.headings.id"
    | "childrenMarkdownRemark.headings.value"
    | "childrenMarkdownRemark.headings.depth"
    | "childrenMarkdownRemark.timeToRead"
    | "childrenMarkdownRemark.tableOfContents"
    | "childrenMarkdownRemark.wordCount.paragraphs"
    | "childrenMarkdownRemark.wordCount.sentences"
    | "childrenMarkdownRemark.wordCount.words"
    | "childrenMarkdownRemark.parent.id"
    | "childrenMarkdownRemark.parent.parent.id"
    | "childrenMarkdownRemark.parent.parent.children"
    | "childrenMarkdownRemark.parent.children"
    | "childrenMarkdownRemark.parent.children.id"
    | "childrenMarkdownRemark.parent.children.children"
    | "childrenMarkdownRemark.parent.internal.content"
    | "childrenMarkdownRemark.parent.internal.contentDigest"
    | "childrenMarkdownRemark.parent.internal.description"
    | "childrenMarkdownRemark.parent.internal.fieldOwners"
    | "childrenMarkdownRemark.parent.internal.ignoreType"
    | "childrenMarkdownRemark.parent.internal.mediaType"
    | "childrenMarkdownRemark.parent.internal.owner"
    | "childrenMarkdownRemark.parent.internal.type"
    | "childrenMarkdownRemark.children"
    | "childrenMarkdownRemark.children.id"
    | "childrenMarkdownRemark.children.parent.id"
    | "childrenMarkdownRemark.children.parent.children"
    | "childrenMarkdownRemark.children.children"
    | "childrenMarkdownRemark.children.children.id"
    | "childrenMarkdownRemark.children.children.children"
    | "childrenMarkdownRemark.children.internal.content"
    | "childrenMarkdownRemark.children.internal.contentDigest"
    | "childrenMarkdownRemark.children.internal.description"
    | "childrenMarkdownRemark.children.internal.fieldOwners"
    | "childrenMarkdownRemark.children.internal.ignoreType"
    | "childrenMarkdownRemark.children.internal.mediaType"
    | "childrenMarkdownRemark.children.internal.owner"
    | "childrenMarkdownRemark.children.internal.type"
    | "childrenMarkdownRemark.internal.content"
    | "childrenMarkdownRemark.internal.contentDigest"
    | "childrenMarkdownRemark.internal.description"
    | "childrenMarkdownRemark.internal.fieldOwners"
    | "childrenMarkdownRemark.internal.ignoreType"
    | "childrenMarkdownRemark.internal.mediaType"
    | "childrenMarkdownRemark.internal.owner"
    | "childrenMarkdownRemark.internal.type"
    | "childMarkdownRemark.id"
    | "childMarkdownRemark.frontmatter.title"
    | "childMarkdownRemark.excerpt"
    | "childMarkdownRemark.rawMarkdownBody"
    | "childMarkdownRemark.html"
    | "childMarkdownRemark.htmlAst"
    | "childMarkdownRemark.excerptAst"
    | "childMarkdownRemark.headings"
    | "childMarkdownRemark.headings.id"
    | "childMarkdownRemark.headings.value"
    | "childMarkdownRemark.headings.depth"
    | "childMarkdownRemark.timeToRead"
    | "childMarkdownRemark.tableOfContents"
    | "childMarkdownRemark.wordCount.paragraphs"
    | "childMarkdownRemark.wordCount.sentences"
    | "childMarkdownRemark.wordCount.words"
    | "childMarkdownRemark.parent.id"
    | "childMarkdownRemark.parent.parent.id"
    | "childMarkdownRemark.parent.parent.children"
    | "childMarkdownRemark.parent.children"
    | "childMarkdownRemark.parent.children.id"
    | "childMarkdownRemark.parent.children.children"
    | "childMarkdownRemark.parent.internal.content"
    | "childMarkdownRemark.parent.internal.contentDigest"
    | "childMarkdownRemark.parent.internal.description"
    | "childMarkdownRemark.parent.internal.fieldOwners"
    | "childMarkdownRemark.parent.internal.ignoreType"
    | "childMarkdownRemark.parent.internal.mediaType"
    | "childMarkdownRemark.parent.internal.owner"
    | "childMarkdownRemark.parent.internal.type"
    | "childMarkdownRemark.children"
    | "childMarkdownRemark.children.id"
    | "childMarkdownRemark.children.parent.id"
    | "childMarkdownRemark.children.parent.children"
    | "childMarkdownRemark.children.children"
    | "childMarkdownRemark.children.children.id"
    | "childMarkdownRemark.children.children.children"
    | "childMarkdownRemark.children.internal.content"
    | "childMarkdownRemark.children.internal.contentDigest"
    | "childMarkdownRemark.children.internal.description"
    | "childMarkdownRemark.children.internal.fieldOwners"
    | "childMarkdownRemark.children.internal.ignoreType"
    | "childMarkdownRemark.children.internal.mediaType"
    | "childMarkdownRemark.children.internal.owner"
    | "childMarkdownRemark.children.internal.type"
    | "childMarkdownRemark.internal.content"
    | "childMarkdownRemark.internal.contentDigest"
    | "childMarkdownRemark.internal.description"
    | "childMarkdownRemark.internal.fieldOwners"
    | "childMarkdownRemark.internal.ignoreType"
    | "childMarkdownRemark.internal.mediaType"
    | "childMarkdownRemark.internal.owner"
    | "childMarkdownRemark.internal.type";

  type contentfulPostDescriptionTextNodeGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<contentfulPostDescriptionTextNodeEdge>;
    readonly nodes: ReadonlyArray<contentfulPostDescriptionTextNode>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<contentfulPostDescriptionTextNodeGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type contentfulPostDescriptionTextNodeGroupConnection_distinctArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeGroupConnection_maxArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeGroupConnection_minArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeGroupConnection_sumArgs = {
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: contentfulPostDescriptionTextNodeFieldsEnum;
  };

  type contentfulPostDescriptionTextNodeSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<contentfulPostDescriptionTextNodeFieldsEnum>>
    >;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type contentfulPostBodyTextNodeConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
    readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<contentfulPostBodyTextNodeGroupConnection>;
  };

  type contentfulPostBodyTextNodeConnection_distinctArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeConnection_maxArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeConnection_minArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeConnection_sumArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeEdge = {
    readonly next: Maybe<contentfulPostBodyTextNode>;
    readonly node: contentfulPostBodyTextNode;
    readonly previous: Maybe<contentfulPostBodyTextNode>;
  };

  type contentfulPostBodyTextNodeFieldsEnum =
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type"
    | "body"
    | "sys.type"
    | "childrenMarkdownRemark"
    | "childrenMarkdownRemark.id"
    | "childrenMarkdownRemark.frontmatter.title"
    | "childrenMarkdownRemark.excerpt"
    | "childrenMarkdownRemark.rawMarkdownBody"
    | "childrenMarkdownRemark.html"
    | "childrenMarkdownRemark.htmlAst"
    | "childrenMarkdownRemark.excerptAst"
    | "childrenMarkdownRemark.headings"
    | "childrenMarkdownRemark.headings.id"
    | "childrenMarkdownRemark.headings.value"
    | "childrenMarkdownRemark.headings.depth"
    | "childrenMarkdownRemark.timeToRead"
    | "childrenMarkdownRemark.tableOfContents"
    | "childrenMarkdownRemark.wordCount.paragraphs"
    | "childrenMarkdownRemark.wordCount.sentences"
    | "childrenMarkdownRemark.wordCount.words"
    | "childrenMarkdownRemark.parent.id"
    | "childrenMarkdownRemark.parent.parent.id"
    | "childrenMarkdownRemark.parent.parent.children"
    | "childrenMarkdownRemark.parent.children"
    | "childrenMarkdownRemark.parent.children.id"
    | "childrenMarkdownRemark.parent.children.children"
    | "childrenMarkdownRemark.parent.internal.content"
    | "childrenMarkdownRemark.parent.internal.contentDigest"
    | "childrenMarkdownRemark.parent.internal.description"
    | "childrenMarkdownRemark.parent.internal.fieldOwners"
    | "childrenMarkdownRemark.parent.internal.ignoreType"
    | "childrenMarkdownRemark.parent.internal.mediaType"
    | "childrenMarkdownRemark.parent.internal.owner"
    | "childrenMarkdownRemark.parent.internal.type"
    | "childrenMarkdownRemark.children"
    | "childrenMarkdownRemark.children.id"
    | "childrenMarkdownRemark.children.parent.id"
    | "childrenMarkdownRemark.children.parent.children"
    | "childrenMarkdownRemark.children.children"
    | "childrenMarkdownRemark.children.children.id"
    | "childrenMarkdownRemark.children.children.children"
    | "childrenMarkdownRemark.children.internal.content"
    | "childrenMarkdownRemark.children.internal.contentDigest"
    | "childrenMarkdownRemark.children.internal.description"
    | "childrenMarkdownRemark.children.internal.fieldOwners"
    | "childrenMarkdownRemark.children.internal.ignoreType"
    | "childrenMarkdownRemark.children.internal.mediaType"
    | "childrenMarkdownRemark.children.internal.owner"
    | "childrenMarkdownRemark.children.internal.type"
    | "childrenMarkdownRemark.internal.content"
    | "childrenMarkdownRemark.internal.contentDigest"
    | "childrenMarkdownRemark.internal.description"
    | "childrenMarkdownRemark.internal.fieldOwners"
    | "childrenMarkdownRemark.internal.ignoreType"
    | "childrenMarkdownRemark.internal.mediaType"
    | "childrenMarkdownRemark.internal.owner"
    | "childrenMarkdownRemark.internal.type"
    | "childMarkdownRemark.id"
    | "childMarkdownRemark.frontmatter.title"
    | "childMarkdownRemark.excerpt"
    | "childMarkdownRemark.rawMarkdownBody"
    | "childMarkdownRemark.html"
    | "childMarkdownRemark.htmlAst"
    | "childMarkdownRemark.excerptAst"
    | "childMarkdownRemark.headings"
    | "childMarkdownRemark.headings.id"
    | "childMarkdownRemark.headings.value"
    | "childMarkdownRemark.headings.depth"
    | "childMarkdownRemark.timeToRead"
    | "childMarkdownRemark.tableOfContents"
    | "childMarkdownRemark.wordCount.paragraphs"
    | "childMarkdownRemark.wordCount.sentences"
    | "childMarkdownRemark.wordCount.words"
    | "childMarkdownRemark.parent.id"
    | "childMarkdownRemark.parent.parent.id"
    | "childMarkdownRemark.parent.parent.children"
    | "childMarkdownRemark.parent.children"
    | "childMarkdownRemark.parent.children.id"
    | "childMarkdownRemark.parent.children.children"
    | "childMarkdownRemark.parent.internal.content"
    | "childMarkdownRemark.parent.internal.contentDigest"
    | "childMarkdownRemark.parent.internal.description"
    | "childMarkdownRemark.parent.internal.fieldOwners"
    | "childMarkdownRemark.parent.internal.ignoreType"
    | "childMarkdownRemark.parent.internal.mediaType"
    | "childMarkdownRemark.parent.internal.owner"
    | "childMarkdownRemark.parent.internal.type"
    | "childMarkdownRemark.children"
    | "childMarkdownRemark.children.id"
    | "childMarkdownRemark.children.parent.id"
    | "childMarkdownRemark.children.parent.children"
    | "childMarkdownRemark.children.children"
    | "childMarkdownRemark.children.children.id"
    | "childMarkdownRemark.children.children.children"
    | "childMarkdownRemark.children.internal.content"
    | "childMarkdownRemark.children.internal.contentDigest"
    | "childMarkdownRemark.children.internal.description"
    | "childMarkdownRemark.children.internal.fieldOwners"
    | "childMarkdownRemark.children.internal.ignoreType"
    | "childMarkdownRemark.children.internal.mediaType"
    | "childMarkdownRemark.children.internal.owner"
    | "childMarkdownRemark.children.internal.type"
    | "childMarkdownRemark.internal.content"
    | "childMarkdownRemark.internal.contentDigest"
    | "childMarkdownRemark.internal.description"
    | "childMarkdownRemark.internal.fieldOwners"
    | "childMarkdownRemark.internal.ignoreType"
    | "childMarkdownRemark.internal.mediaType"
    | "childMarkdownRemark.internal.owner"
    | "childMarkdownRemark.internal.type";

  type contentfulPostBodyTextNodeGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
    readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<contentfulPostBodyTextNodeGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type contentfulPostBodyTextNodeGroupConnection_distinctArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeGroupConnection_maxArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeGroupConnection_minArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeGroupConnection_sumArgs = {
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: contentfulPostBodyTextNodeFieldsEnum;
  };

  type contentfulPostBodyTextNodeSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<contentfulPostBodyTextNodeFieldsEnum>>
    >;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type ContentfulContentTypeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type ContentfulContentTypeConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
    readonly nodes: ReadonlyArray<ContentfulContentType>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  };

  type ContentfulContentTypeConnection_distinctArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeConnection_maxArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeConnection_minArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeConnection_sumArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeEdge = {
    readonly next: Maybe<ContentfulContentType>;
    readonly node: ContentfulContentType;
    readonly previous: Maybe<ContentfulContentType>;
  };

  type ContentfulContentTypeFieldsEnum =
    | "id"
    | "parent.id"
    | "parent.parent.id"
    | "parent.parent.parent.id"
    | "parent.parent.parent.children"
    | "parent.parent.children"
    | "parent.parent.children.id"
    | "parent.parent.children.children"
    | "parent.parent.internal.content"
    | "parent.parent.internal.contentDigest"
    | "parent.parent.internal.description"
    | "parent.parent.internal.fieldOwners"
    | "parent.parent.internal.ignoreType"
    | "parent.parent.internal.mediaType"
    | "parent.parent.internal.owner"
    | "parent.parent.internal.type"
    | "parent.children"
    | "parent.children.id"
    | "parent.children.parent.id"
    | "parent.children.parent.children"
    | "parent.children.children"
    | "parent.children.children.id"
    | "parent.children.children.children"
    | "parent.children.internal.content"
    | "parent.children.internal.contentDigest"
    | "parent.children.internal.description"
    | "parent.children.internal.fieldOwners"
    | "parent.children.internal.ignoreType"
    | "parent.children.internal.mediaType"
    | "parent.children.internal.owner"
    | "parent.children.internal.type"
    | "parent.internal.content"
    | "parent.internal.contentDigest"
    | "parent.internal.description"
    | "parent.internal.fieldOwners"
    | "parent.internal.ignoreType"
    | "parent.internal.mediaType"
    | "parent.internal.owner"
    | "parent.internal.type"
    | "children"
    | "children.id"
    | "children.parent.id"
    | "children.parent.parent.id"
    | "children.parent.parent.children"
    | "children.parent.children"
    | "children.parent.children.id"
    | "children.parent.children.children"
    | "children.parent.internal.content"
    | "children.parent.internal.contentDigest"
    | "children.parent.internal.description"
    | "children.parent.internal.fieldOwners"
    | "children.parent.internal.ignoreType"
    | "children.parent.internal.mediaType"
    | "children.parent.internal.owner"
    | "children.parent.internal.type"
    | "children.children"
    | "children.children.id"
    | "children.children.parent.id"
    | "children.children.parent.children"
    | "children.children.children"
    | "children.children.children.id"
    | "children.children.children.children"
    | "children.children.internal.content"
    | "children.children.internal.contentDigest"
    | "children.children.internal.description"
    | "children.children.internal.fieldOwners"
    | "children.children.internal.ignoreType"
    | "children.children.internal.mediaType"
    | "children.children.internal.owner"
    | "children.children.internal.type"
    | "children.internal.content"
    | "children.internal.contentDigest"
    | "children.internal.description"
    | "children.internal.fieldOwners"
    | "children.internal.ignoreType"
    | "children.internal.mediaType"
    | "children.internal.owner"
    | "children.internal.type"
    | "internal.content"
    | "internal.contentDigest"
    | "internal.description"
    | "internal.fieldOwners"
    | "internal.ignoreType"
    | "internal.mediaType"
    | "internal.owner"
    | "internal.type"
    | "name"
    | "displayField"
    | "description"
    | "sys.type";

  type ContentfulContentTypeGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
    readonly nodes: ReadonlyArray<ContentfulContentType>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ContentfulContentTypeGroupConnection_distinctArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeGroupConnection_maxArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeGroupConnection_minArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeGroupConnection_sumArgs = {
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeGroupConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ContentfulContentTypeFieldsEnum;
  };

  type ContentfulContentTypeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly displayField: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
  };

  type ContentfulContentTypeSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>
    >;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

  type PagesQueryQuery = {
    readonly allSiteFunction: {
      readonly nodes: ReadonlyArray<Pick<SiteFunction, "functionRoute">>;
    };
    readonly allSitePage: {
      readonly nodes: ReadonlyArray<Pick<SitePage, "path">>;
    };
  };

  type postListQueryVariables = Exact<{ [key: string]: never }>;

  type postListQuery = {
    readonly allContentfulPost: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<ContentfulPost, "title" | "slug" | "updatedAt"> & {
          readonly description: Maybe<
            Pick<contentfulPostDescriptionTextNode, "description">
          >;
        };
      }>;
    };
  };

  type LayoutQueryVariables = Exact<{ [key: string]: never }>;

  type LayoutQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, "title">>;
    }>;
  };

  type SeoQueryVariables = Exact<{ [key: string]: never }>;

  type SeoQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<
        Pick<SiteSiteMetadata, "title" | "description" | "author">
      >;
    }>;
  };

  type GatsbyImageSharpFixedFragment = Pick<
    ImageSharpFixed,
    "base64" | "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyImageSharpFixed_tracedSVGFragment = Pick<
    ImageSharpFixed,
    "tracedSVG" | "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyImageSharpFixed_withWebpFragment = Pick<
    ImageSharpFixed,
    "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
  >;

  type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<
    ImageSharpFixed,
    | "tracedSVG"
    | "width"
    | "height"
    | "src"
    | "srcSet"
    | "srcWebp"
    | "srcSetWebp"
  >;

  type GatsbyImageSharpFixed_noBase64Fragment = Pick<
    ImageSharpFixed,
    "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<
    ImageSharpFixed,
    "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
  >;

  type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: ImageSharpFluid["presentationHeight"];
    maxWidth: ImageSharpFluid["presentationWidth"];
  };

  type GatsbyImageSharpFluid_tracedSVGFragment = Pick<
    ImageSharpFluid,
    "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyImageSharpFluid_withWebpFragment = Pick<
    ImageSharpFluid,
    | "base64"
    | "aspectRatio"
    | "src"
    | "srcSet"
    | "srcWebp"
    | "srcSetWebp"
    | "sizes"
  >;

  type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<
    ImageSharpFluid,
    | "tracedSVG"
    | "aspectRatio"
    | "src"
    | "srcSet"
    | "srcWebp"
    | "srcSetWebp"
    | "sizes"
  >;

  type GatsbyImageSharpFluid_noBase64Fragment = Pick<
    ImageSharpFluid,
    "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<
    ImageSharpFluid,
    "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
  >;

  type GatsbyContentfulFixedFragment = Pick<
    ContentfulFixed,
    "base64" | "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyContentfulFixed_tracedSVGFragment = Pick<
    ContentfulFixed,
    "tracedSVG" | "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyContentfulFixed_noBase64Fragment = Pick<
    ContentfulFixed,
    "width" | "height" | "src" | "srcSet"
  >;

  type GatsbyContentfulFixed_withWebpFragment = Pick<
    ContentfulFixed,
    "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
  >;

  type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<
    ContentfulFixed,
    "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
  >;

  type GatsbyContentfulFluidFragment = Pick<
    ContentfulFluid,
    "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyContentfulFluid_tracedSVGFragment = Pick<
    ContentfulFluid,
    "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyContentfulFluid_noBase64Fragment = Pick<
    ContentfulFluid,
    "aspectRatio" | "src" | "srcSet" | "sizes"
  >;

  type GatsbyContentfulFluid_withWebpFragment = Pick<
    ContentfulFluid,
    | "base64"
    | "aspectRatio"
    | "src"
    | "srcSet"
    | "srcWebp"
    | "srcSetWebp"
    | "sizes"
  >;

  type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<
    ContentfulFluid,
    "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
  >;
}

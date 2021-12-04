export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents `true` or `false` values. */
  BooleanType: any;
  CustomData: any;
  /** A ISO 8601 compliant date value */
  Date: any;
  /** A ISO 8601 compliant datetime value */
  DateTime: any;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

export type ArtistModelFilter = {
  OR?: Maybe<Array<Maybe<ArtistModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  facebook?: Maybe<StringFilter>;
  id?: Maybe<ItemIdFilter>;
  image?: Maybe<FileFilter>;
  instagram?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  spotify?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export enum ArtistModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  facebook_ASC = 'facebook_ASC',
  facebook_DESC = 'facebook_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  instagram_ASC = 'instagram_ASC',
  instagram_DESC = 'instagram_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  spotify_ASC = 'spotify_ASC',
  spotify_DESC = 'spotify_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Artist (artist) */
export type ArtistRecord = {
  __typename?: 'ArtistRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  instagram?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Artist (artist) */
export type ArtistRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['BooleanType']>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha?: Maybe<Scalars['IntType']>;
  blue?: Maybe<Scalars['IntType']>;
  green?: Maybe<Scalars['IntType']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['Date']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['Date']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['Date']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['Date']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['Date']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['Date']>;
};

export type EditionModelFilter = {
  OR?: Maybe<Array<Maybe<EditionModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  endDate?: Maybe<DateFilter>;
  facebookEvent?: Maybe<StringFilter>;
  id?: Maybe<ItemIdFilter>;
  logo?: Maybe<FileFilter>;
  seo?: Maybe<SeoFilter>;
  sponsors?: Maybe<LinksFilter>;
  startDate?: Maybe<DateFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export type EditionModelHomepageBlocksField = IframeRecord | ImageRecord;

export enum EditionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  endDate_ASC = 'endDate_ASC',
  endDate_DESC = 'endDate_DESC',
  facebookEvent_ASC = 'facebookEvent_ASC',
  facebookEvent_DESC = 'facebookEvent_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  startDate_ASC = 'startDate_ASC',
  startDate_DESC = 'startDate_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Edition (edition) */
export type EditionRecord = {
  __typename?: 'EditionRecord';
  _allSeoLocales?: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  endDate?: Maybe<Scalars['Date']>;
  facebookEvent?: Maybe<Scalars['String']>;
  homepageBlocks?: Maybe<Array<Maybe<EditionModelHomepageBlocksField>>>;
  id: Scalars['ItemId'];
  logo?: Maybe<FileField>;
  seo?: Maybe<SeoField>;
  sponsors: Array<SponsorRecord>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Edition (edition) */
export type EditionRecord_AllSeoLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Edition (edition) */
export type EditionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Edition (edition) */
export type EditionRecordSeoArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Record of type External Link (external_link) */
export type ExternalLinkRecord = {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type External Link (external_link) */
export type ExternalLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

export type FileField = {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<Maybe<ColorField>>;
  copyright?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['CustomData']>;
  exifInfo?: Maybe<Scalars['CustomData']>;
  filename: Scalars['String'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Maybe<Scalars['String']>>;
  tags: Array<Maybe<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


export type FileFieldAltArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: Maybe<ImgixParams>;
  punch?: Maybe<Scalars['Float']>;
  quality?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type FileFieldCustomDataArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  imgixParams?: Maybe<ImgixParams>;
  sizes?: Maybe<Scalars['String']>;
};


export type FileFieldTitleArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: Maybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

/** Record of type Homepage iFrame (iframe) */
export type IframeRecord = {
  __typename?: 'IframeRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  iframeEmbedUrl?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Homepage iFrame (iframe) */
export type IframeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Record of type Homepage Image (image) */
export type ImageRecord = {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  asset?: Maybe<FileField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  size?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Homepage Image (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: Maybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: Maybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: Maybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: Maybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: Maybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: Maybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: Maybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: Maybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: Maybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: Maybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: Maybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: Maybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: Maybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: Maybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: Maybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: Maybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: Maybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: Maybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: Maybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: Maybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: Maybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: Maybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: Maybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: Maybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: Maybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: Maybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: Maybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: Maybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: Maybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: Maybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: Maybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: Maybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: Maybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: Maybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: Maybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: Maybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: Maybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: Maybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: Maybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: Maybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: Maybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: Maybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: Maybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: Maybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: Maybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: Maybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: Maybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: Maybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: Maybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: Maybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: Maybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: Maybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: Maybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: Maybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: Maybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: Maybe<Scalars['BooleanType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: Maybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: Maybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: Maybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: Maybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: Maybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: Maybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: Maybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: Maybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: Maybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: Maybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: Maybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: Maybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: Maybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: Maybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: Maybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: Maybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: Maybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: Maybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: Maybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: Maybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: Maybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: Maybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: Maybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: Maybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: Maybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: Maybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: Maybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: Maybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: Maybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: Maybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: Maybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: Maybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: Maybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: Maybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: Maybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: Maybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: Maybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: Maybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: Maybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: Maybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: Maybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: Maybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: Maybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: Maybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: Maybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: Maybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: Maybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: Maybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: Maybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: Maybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: Maybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: Maybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: Maybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: Maybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: Maybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: Maybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: Maybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: Maybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: Maybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: Maybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

export enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

export enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

export enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsMarkTile {
  grid = 'grid'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsTransparency {
  grid = 'grid'
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: Maybe<Scalars['BooleanType']>;
};

/** Record of type Info Item (info_item) */
export type InfoItemRecord = {
  __typename?: 'InfoItemRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Info Item (info_item) */
export type InfoItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Info Item (info_item) */
export type InfoItemRecordContentArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

/** Record of type Internal Link (internal_link) */
export type InternalLinkRecord = {
  __typename?: 'InternalLinkRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  label?: Maybe<Scalars['String']>;
  page?: Maybe<PageRecord>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Internal Link (internal_link) */
export type InternalLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: Maybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: Maybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Record of type Lineup Item (lineup_item) */
export type LineupItemRecord = {
  __typename?: 'LineupItemRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  artist?: Maybe<ArtistRecord>;
  artistLevel?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ItemId'];
  introduction?: Maybe<Scalars['String']>;
  lineupDate?: Maybe<Scalars['Date']>;
  stage?: Maybe<StageRecord>;
  startTime?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Lineup Item (lineup_item) */
export type LineupItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Lineup Item (lineup_item) */
export type LineupItemRecordIntroductionArgs = {
  markdown?: Maybe<Scalars['Boolean']>;
};

export type LineupItemRecordListMultiLocaleField = {
  __typename?: 'LineupItemRecordListMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Array<Maybe<LineupItemRecord>>>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: Maybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: Maybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

export enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

export type NewsModelFilter = {
  OR?: Maybe<Array<Maybe<NewsModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  featuredImage?: Maybe<FileFilter>;
  id?: Maybe<ItemIdFilter>;
  seo?: Maybe<SeoFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type News (news) */
export type NewsRecord = {
  __typename?: 'NewsRecord';
  _allArticleLocales?: Maybe<Array<Maybe<WysiwygRecordListMultiLocaleField>>>;
  _allSeoLocales?: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>;
  _allSlugLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>;
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  article?: Maybe<Array<Maybe<WysiwygRecord>>>;
  createdAt: Scalars['DateTime'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type News (news) */
export type NewsRecord_AllArticleLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllSeoLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllSlugLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllTitleLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordArticleArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordSeoArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordSlugArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordTitleArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: Maybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: Maybe<UploadOrientation>;
};

export type PageModelContentField = {
  __typename?: 'PageModelContentField';
  blocks: Array<InfoItemRecord>;
  links: Array<EditionRecord>;
  value: Scalars['JsonField'];
};

export type PageModelContentFieldMultiLocaleField = {
  __typename?: 'PageModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PageModelContentField>;
};

export type PageModelFilter = {
  OR?: Maybe<Array<Maybe<PageModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  content?: Maybe<StructuredTextFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  featuredImage?: Maybe<FileFilter>;
  id?: Maybe<ItemIdFilter>;
  parent?: Maybe<ParentFilter>;
  position?: Maybe<PositionFilter>;
  seo?: Maybe<SeoFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export enum PageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Page (page) */
export type PageRecord = {
  __typename?: 'PageRecord';
  _allContentLocales?: Maybe<Array<Maybe<PageModelContentFieldMultiLocaleField>>>;
  _allSeoLocales?: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>;
  _allSlugLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>;
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  children?: Maybe<Array<Maybe<PageRecord>>>;
  content?: Maybe<PageModelContentField>;
  createdAt: Scalars['DateTime'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  parent?: Maybe<PageRecord>;
  position?: Maybe<Scalars['IntType']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Page (page) */
export type PageRecord_AllContentLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecord_AllSeoLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecord_AllSlugLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecord_AllTitleLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecordContentArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecordSeoArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecordSlugArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Page (page) */
export type PageRecordTitleArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: Maybe<Scalars['ItemId']>;
  /** Filter records with a parent record or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArtistsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEditionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSponsorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStagesMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  /** Returns meta information regarding a record collection */
  _allWavesMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allArtists: Array<ArtistRecord>;
  /** Returns a collection of records */
  allEditions: Array<EditionRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allSponsors: Array<SponsorRecord>;
  /** Returns a collection of records */
  allStages: Array<StageRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allWaves: Array<WaveRecord>;
  /** Returns a specific record */
  artist?: Maybe<ArtistRecord>;
  /** Returns a specific record */
  edition?: Maybe<EditionRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  sponsor?: Maybe<SponsorRecord>;
  /** Returns a specific record */
  stage?: Maybe<StageRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  wave?: Maybe<WaveRecord>;
  /** Returns the single instance record */
  website?: Maybe<WebsiteRecord>;
};


/** The query root for this schema */
export type Query_AllArtistsMetaArgs = {
  filter?: Maybe<ArtistModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEditionsMetaArgs = {
  filter?: Maybe<EditionModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewsMetaArgs = {
  filter?: Maybe<NewsModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: Maybe<PageModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSponsorsMetaArgs = {
  filter?: Maybe<SponsorModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStagesMetaArgs = {
  filter?: Maybe<StageModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: Maybe<UploadFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllWavesMetaArgs = {
  filter?: Maybe<WaveModelFilter>;
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  locale?: Maybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllArtistsArgs = {
  filter?: Maybe<ArtistModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<ArtistModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllEditionsArgs = {
  filter?: Maybe<EditionModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<EditionModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllNewsArgs = {
  filter?: Maybe<NewsModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<NewsModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  filter?: Maybe<PageModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<PageModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllSponsorsArgs = {
  filter?: Maybe<SponsorModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<SponsorModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllStagesArgs = {
  filter?: Maybe<StageModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<StageModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  filter?: Maybe<UploadFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllWavesArgs = {
  filter?: Maybe<WaveModelFilter>;
  first?: Maybe<Scalars['IntType']>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<WaveModelOrderBy>>>;
  skip?: Maybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryArtistArgs = {
  filter?: Maybe<ArtistModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<ArtistModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEditionArgs = {
  filter?: Maybe<EditionModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<EditionModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewsArgs = {
  filter?: Maybe<NewsModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  filter?: Maybe<PageModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySponsorArgs = {
  filter?: Maybe<SponsorModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<SponsorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStageArgs = {
  filter?: Maybe<StageModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<StageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  filter?: Maybe<UploadFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryWaveArgs = {
  filter?: Maybe<WaveModelFilter>;
  locale?: Maybe<SiteLocale>;
  orderBy?: Maybe<Array<Maybe<WaveModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryWebsiteArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: Maybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: Maybe<Array<Maybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: Maybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: Maybe<Array<Maybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: Maybe<Array<Maybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  locale?: Maybe<SiteLocale>;
};

export enum SiteLocale {
  nl = 'nl'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SponsorModelFilter = {
  OR?: Maybe<Array<Maybe<SponsorModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  displayFooter?: Maybe<BooleanFilter>;
  displayLogo?: Maybe<BooleanFilter>;
  id?: Maybe<ItemIdFilter>;
  logo?: Maybe<FileFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
  website?: Maybe<StringFilter>;
};

export enum SponsorModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  displayFooter_ASC = 'displayFooter_ASC',
  displayFooter_DESC = 'displayFooter_DESC',
  displayLogo_ASC = 'displayLogo_ASC',
  displayLogo_DESC = 'displayLogo_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  website_ASC = 'website_ASC',
  website_DESC = 'website_DESC'
}

/** Record of type Sponsor (sponsor) */
export type SponsorRecord = {
  __typename?: 'SponsorRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  displayFooter?: Maybe<Scalars['BooleanType']>;
  displayLogo?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  logo?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};


/** Record of type Sponsor (sponsor) */
export type SponsorRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type StageModelFilter = {
  OR?: Maybe<Array<Maybe<StageModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  id?: Maybe<ItemIdFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export enum StageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Stage (stage) */
export type StageRecord = {
  __typename?: 'StageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Stage (stage) */
export type StageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: Maybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: Maybe<Array<Maybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: Maybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: Maybe<Array<Maybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: Maybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: Maybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: Maybe<Scalars['BooleanType']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']>;
};

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: Maybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: Maybe<UploadType>;
  /** Search uploads with the specified types */
  in?: Maybe<Array<Maybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: Maybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: Maybe<Array<Maybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: Maybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: Maybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: Maybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: Maybe<Array<Maybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export type UploadFilter = {
  OR?: Maybe<Array<Maybe<UploadFilter>>>;
  _createdAt?: Maybe<UploadCreatedAtFilter>;
  _updatedAt?: Maybe<UploadUpdatedAtFilter>;
  alt?: Maybe<UploadAltFilter>;
  author?: Maybe<UploadAuthorFilter>;
  basename?: Maybe<UploadBasenameFilter>;
  colors?: Maybe<UploadColorsFilter>;
  copyright?: Maybe<UploadCopyrightFilter>;
  filename?: Maybe<UploadFilenameFilter>;
  format?: Maybe<UploadFormatFilter>;
  height?: Maybe<UploadHeightFilter>;
  id?: Maybe<UploadIdFilter>;
  inUse?: Maybe<InUseFilter>;
  md5?: Maybe<UploadMd5Filter>;
  mimeType?: Maybe<UploadMimeTypeFilter>;
  notes?: Maybe<UploadNotesFilter>;
  orientation?: Maybe<OrientationFilter>;
  resolution?: Maybe<ResolutionFilter>;
  size?: Maybe<UploadSizeFilter>;
  smartTags?: Maybe<UploadTagsFilter>;
  tags?: Maybe<UploadTagsFilter>;
  title?: Maybe<UploadTitleFilter>;
  type?: Maybe<TypeFilter>;
  width?: Maybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: Maybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: Maybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: Maybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: Maybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: Maybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: Maybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: Maybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: Maybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: Maybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: Maybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: Maybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads linked to the specified tag */
  contains?: Maybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: Maybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: Maybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>;
};

export enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars['DateTime']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration: Scalars['Int'];
  framerate: Scalars['Int'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: Maybe<VideoMp4Res>;
  res?: Maybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: Maybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: Maybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: Maybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: Maybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: Maybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: Maybe<Scalars['IntType']>;
};

export enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

export type WaveModelFilter = {
  OR?: Maybe<Array<Maybe<WaveModelFilter>>>;
  _createdAt?: Maybe<CreatedAtFilter>;
  _firstPublishedAt?: Maybe<PublishedAtFilter>;
  _isValid?: Maybe<BooleanFilter>;
  _publicationScheduledAt?: Maybe<PublishedAtFilter>;
  _publishedAt?: Maybe<PublishedAtFilter>;
  _status?: Maybe<StatusFilter>;
  _unpublishingScheduledAt?: Maybe<PublishedAtFilter>;
  _updatedAt?: Maybe<UpdatedAtFilter>;
  createdAt?: Maybe<CreatedAtFilter>;
  edition?: Maybe<LinkFilter>;
  id?: Maybe<ItemIdFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<UpdatedAtFilter>;
};

export enum WaveModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Wave (wave) */
export type WaveRecord = {
  __typename?: 'WaveRecord';
  _allLineupLocales?: Maybe<Array<Maybe<LineupItemRecordListMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  edition?: Maybe<EditionRecord>;
  id: Scalars['ItemId'];
  lineup?: Maybe<Array<Maybe<LineupItemRecord>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Wave (wave) */
export type WaveRecord_AllLineupLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Wave (wave) */
export type WaveRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Wave (wave) */
export type WaveRecordLineupArgs = {
  locale?: Maybe<SiteLocale>;
};

export type WebsiteModelFooterNavigationField = ExternalLinkRecord | InternalLinkRecord;

export type WebsiteModelFooterNavigationFieldListMultiLocaleField = {
  __typename?: 'WebsiteModelFooterNavigationFieldListMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Array<Maybe<WebsiteModelFooterNavigationField>>>;
};

export type WebsiteModelMainNavigationField = ExternalLinkRecord | InternalLinkRecord;

export type WebsiteModelMainNavigationFieldListMultiLocaleField = {
  __typename?: 'WebsiteModelMainNavigationFieldListMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Array<Maybe<WebsiteModelMainNavigationField>>>;
};

/** Record of type Website (website) */
export type WebsiteRecord = {
  __typename?: 'WebsiteRecord';
  _allFooterNavigationLocales?: Maybe<Array<Maybe<WebsiteModelFooterNavigationFieldListMultiLocaleField>>>;
  _allMainNavigationLocales?: Maybe<Array<Maybe<WebsiteModelMainNavigationFieldListMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  activeEdition?: Maybe<EditionRecord>;
  createdAt: Scalars['DateTime'];
  displayDayLayout?: Maybe<Scalars['BooleanType']>;
  displayStageLayout?: Maybe<Scalars['BooleanType']>;
  displayTimeLayout?: Maybe<Scalars['BooleanType']>;
  footerNavigation?: Maybe<Array<Maybe<WebsiteModelFooterNavigationField>>>;
  id: Scalars['ItemId'];
  lineupActive?: Maybe<Scalars['BooleanType']>;
  mainNavigation?: Maybe<Array<Maybe<WebsiteModelMainNavigationField>>>;
  ticketingActive?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Website (website) */
export type WebsiteRecord_AllFooterNavigationLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Website (website) */
export type WebsiteRecord_AllMainNavigationLocalesArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Website (website) */
export type WebsiteRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Website (website) */
export type WebsiteRecordFooterNavigationArgs = {
  locale?: Maybe<SiteLocale>;
};


/** Record of type Website (website) */
export type WebsiteRecordMainNavigationArgs = {
  locale?: Maybe<SiteLocale>;
};

export type WysiwygModelRichTextField = {
  __typename?: 'WysiwygModelRichTextField';
  blocks: Array<InfoItemRecord>;
  links: Array<EditionRecord>;
  value: Scalars['JsonField'];
};

/** Record of type WYSIWYG (wysiwyg) */
export type WysiwygRecord = {
  __typename?: 'WysiwygRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  richText?: Maybe<WysiwygModelRichTextField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type WYSIWYG (wysiwyg) */
export type WysiwygRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type WysiwygRecordListMultiLocaleField = {
  __typename?: 'WysiwygRecordListMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Array<Maybe<WysiwygRecord>>>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x?: Maybe<Scalars['FloatType']>;
  y?: Maybe<Scalars['FloatType']>;
};

export type EditionFragment = { __typename?: 'EditionRecord', id: any, endDate?: any | null | undefined, facebookEvent?: string | null | undefined, startDate?: any | null | undefined, title?: string | null | undefined, logo?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined, sponsors: Array<{ __typename?: 'SponsorRecord', website?: string | null | undefined, name?: string | null | undefined, displayLogo?: any | null | undefined, displayFooter?: any | null | undefined, logo?: { __typename?: 'FileField', url: string } | null | undefined }>, homepageBlocks?: Array<{ __typename?: 'IframeRecord', id: any, size?: string | null | undefined, iframeEmbedUrl?: string | null | undefined, type: 'IframeRecord' } | { __typename?: 'ImageRecord', id: any, size?: string | null | undefined, type: 'ImageRecord', asset?: { __typename?: 'FileField', square?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, long?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type ResponsiveImageFragmentFragment = { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined };

export type HomepageImageFragment = { __typename?: 'ImageRecord', id: any, size?: string | null | undefined, type: 'ImageRecord', asset?: { __typename?: 'FileField', square?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, long?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined };

export type HomepageIframeFragment = { __typename?: 'IframeRecord', id: any, size?: string | null | undefined, iframeEmbedUrl?: string | null | undefined, type: 'IframeRecord' };

export type NewsQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'NewsRecord', title?: string | null | undefined, slug?: string | null | undefined, seo?: { __typename?: 'SeoField', description?: string | null | undefined, twitterCard?: string | null | undefined, image?: { __typename?: 'FileField', url: string } | null | undefined } | null | undefined, featuredImage?: { __typename?: 'FileField', blurhash?: string | null | undefined, url: string } | null | undefined, article?: Array<{ __typename?: 'WysiwygRecord', richText?: { __typename?: 'WysiwygModelRichTextField', value: any } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type NewsOverviewQueryVariables = Exact<{
  locale?: Maybe<SiteLocale>;
}>;


export type NewsOverviewQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsRecord', title?: string | null | undefined, slug?: string | null | undefined, _publishedAt?: any | null | undefined, featuredImage?: { __typename?: 'FileField', square?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, long?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined }> };

export type PageQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', slug?: string | null | undefined, title?: string | null | undefined, featuredImage?: { __typename?: 'FileField', opengraph?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined, content?: { __typename?: 'PageModelContentField', value: any, blocks: Array<{ __typename: 'InfoItemRecord', content?: string | null | undefined, title?: string | null | undefined, id: any }> } | null | undefined, children?: Array<{ __typename?: 'PageRecord', slug?: string | null | undefined, title?: string | null | undefined, featuredImage?: { __typename?: 'FileField', thumbnail?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, parent?: { __typename?: 'PageRecord', title?: string | null | undefined, slug?: string | null | undefined, children?: Array<{ __typename?: 'PageRecord', slug?: string | null | undefined, title?: string | null | undefined, featuredImage?: { __typename?: 'FileField', thumbnail?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type SponsorFragment = { __typename?: 'SponsorRecord', website?: string | null | undefined, name?: string | null | undefined, displayLogo?: any | null | undefined, displayFooter?: any | null | undefined, logo?: { __typename?: 'FileField', url: string } | null | undefined };

export type WavesQueryVariables = Exact<{
  edition?: Maybe<Scalars['ItemId']>;
  locale?: Maybe<SiteLocale>;
}>;


export type WavesQuery = { __typename?: 'Query', waves: Array<{ __typename?: 'WaveRecord', lineup?: Array<{ __typename?: 'LineupItemRecord', id: any, artistLevel?: string | null | undefined, artist?: { __typename?: 'ArtistRecord', id: any, name?: string | null | undefined, slug?: string | null | undefined, image?: { __typename?: 'FileField', normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined }> };

export type WavesWithDayQueryVariables = Exact<{
  edition?: Maybe<Scalars['ItemId']>;
  locale?: Maybe<SiteLocale>;
}>;


export type WavesWithDayQuery = { __typename?: 'Query', waves: Array<{ __typename?: 'WaveRecord', lineup?: Array<{ __typename?: 'LineupItemRecord', id: any, artistLevel?: string | null | undefined, lineupDate?: any | null | undefined, artist?: { __typename?: 'ArtistRecord', id: any, name?: string | null | undefined, slug?: string | null | undefined, image?: { __typename?: 'FileField', normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined }> };

export type WavesWithDayStageQueryVariables = Exact<{
  edition?: Maybe<Scalars['ItemId']>;
  locale?: Maybe<SiteLocale>;
}>;


export type WavesWithDayStageQuery = { __typename?: 'Query', waves: Array<{ __typename?: 'WaveRecord', lineup?: Array<{ __typename?: 'LineupItemRecord', id: any, artistLevel?: string | null | undefined, lineupDate?: any | null | undefined, stage?: { __typename?: 'StageRecord', name?: string | null | undefined, slug?: string | null | undefined, id: any } | null | undefined, artist?: { __typename?: 'ArtistRecord', id: any, name?: string | null | undefined, slug?: string | null | undefined, image?: { __typename?: 'FileField', normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined }> };

export type WavesWithDayStageTimeQueryVariables = Exact<{
  edition?: Maybe<Scalars['ItemId']>;
  locale?: Maybe<SiteLocale>;
}>;


export type WavesWithDayStageTimeQuery = { __typename?: 'Query', waves: Array<{ __typename?: 'WaveRecord', lineup?: Array<{ __typename?: 'LineupItemRecord', id: any, artistLevel?: string | null | undefined, endTime?: any | null | undefined, lineupDate?: any | null | undefined, startTime?: any | null | undefined, stage?: { __typename?: 'StageRecord', name?: string | null | undefined, slug?: string | null | undefined, id: any } | null | undefined, artist?: { __typename?: 'ArtistRecord', id: any, name?: string | null | undefined, slug?: string | null | undefined, image?: { __typename?: 'FileField', normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined }> };

export type InternalLinkFragment = { __typename?: 'InternalLinkRecord', label?: string | null | undefined, page?: { __typename?: 'PageRecord', id: any, slug?: string | null | undefined } | null | undefined };

export type ExternalLinkFragment = { __typename?: 'ExternalLinkRecord', label?: string | null | undefined, link?: string | null | undefined };

export type WebsiteQueryVariables = Exact<{
  locale?: Maybe<SiteLocale>;
}>;


export type WebsiteQuery = { __typename?: 'Query', website?: { __typename?: 'WebsiteRecord', ticketingActive?: any | null | undefined, lineupActive?: any | null | undefined, displayTimeLayout?: any | null | undefined, displayStageLayout?: any | null | undefined, displayDayLayout?: any | null | undefined, activeEdition?: { __typename?: 'EditionRecord', id: any, endDate?: any | null | undefined, facebookEvent?: string | null | undefined, startDate?: any | null | undefined, title?: string | null | undefined, logo?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined, sponsors: Array<{ __typename?: 'SponsorRecord', website?: string | null | undefined, name?: string | null | undefined, displayLogo?: any | null | undefined, displayFooter?: any | null | undefined, logo?: { __typename?: 'FileField', url: string } | null | undefined }>, homepageBlocks?: Array<{ __typename?: 'IframeRecord', id: any, size?: string | null | undefined, iframeEmbedUrl?: string | null | undefined, type: 'IframeRecord' } | { __typename?: 'ImageRecord', id: any, size?: string | null | undefined, type: 'ImageRecord', asset?: { __typename?: 'FileField', square?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, normal?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined, long?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, aspectRatio: any, alt?: string | null | undefined, title?: string | null | undefined, bgColor?: string | null | undefined, base64?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined, mainNavigation?: Array<{ __typename: 'ExternalLinkRecord', label?: string | null | undefined, link?: string | null | undefined } | { __typename: 'InternalLinkRecord', label?: string | null | undefined, page?: { __typename?: 'PageRecord', id: any, slug?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, footerNavigation?: Array<{ __typename: 'ExternalLinkRecord', label?: string | null | undefined, link?: string | null | undefined } | { __typename: 'InternalLinkRecord', label?: string | null | undefined, page?: { __typename?: 'PageRecord', id: any, slug?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

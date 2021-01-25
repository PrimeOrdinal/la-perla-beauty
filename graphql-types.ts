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
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Serialized elasticlunr search index */
  SiteSearchIndex_Index: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BigCommerceCategories = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  parent_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
  page_title?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  meta_description?: Maybe<Scalars['String']>;
  layout_file?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  search_keywords?: Maybe<Scalars['String']>;
  default_product_sort?: Maybe<Scalars['String']>;
  custom_url?: Maybe<BigCommerceCategoriesCustom_Url>;
  bigcommerce_id?: Maybe<Scalars['Int']>;
};

export type BigCommerceCategoriesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BigCommerceCategoriesEdge>;
  nodes: Array<BigCommerceCategories>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<BigCommerceCategoriesGroupConnection>;
};


export type BigCommerceCategoriesConnectionDistinctArgs = {
  field: BigCommerceCategoriesFieldsEnum;
};


export type BigCommerceCategoriesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BigCommerceCategoriesFieldsEnum;
};

export type BigCommerceCategoriesCustom_Url = {
  url?: Maybe<Scalars['String']>;
  is_customized?: Maybe<Scalars['Boolean']>;
};

export type BigCommerceCategoriesCustom_UrlFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  is_customized?: Maybe<BooleanQueryOperatorInput>;
};

export type BigCommerceCategoriesEdge = {
  next?: Maybe<BigCommerceCategories>;
  node: BigCommerceCategories;
  previous?: Maybe<BigCommerceCategories>;
};

export type BigCommerceCategoriesFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent_id'
  | 'name'
  | 'description'
  | 'views'
  | 'sort_order'
  | 'page_title'
  | 'meta_keywords'
  | 'meta_description'
  | 'layout_file'
  | 'image_url'
  | 'is_visible'
  | 'search_keywords'
  | 'default_product_sort'
  | 'custom_url___url'
  | 'custom_url___is_customized'
  | 'bigcommerce_id';

export type BigCommerceCategoriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  parent_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  views?: Maybe<IntQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
  meta_keywords?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  layout_file?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  search_keywords?: Maybe<StringQueryOperatorInput>;
  default_product_sort?: Maybe<StringQueryOperatorInput>;
  custom_url?: Maybe<BigCommerceCategoriesCustom_UrlFilterInput>;
  bigcommerce_id?: Maybe<IntQueryOperatorInput>;
};

export type BigCommerceCategoriesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BigCommerceCategoriesEdge>;
  nodes: Array<BigCommerceCategories>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type BigCommerceCategoriesSortInput = {
  fields?: Maybe<Array<Maybe<BigCommerceCategoriesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BigCommerceProducts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Int']>;
  retail_price?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['Int']>;
  map_price?: Maybe<Scalars['Int']>;
  tax_class_id?: Maybe<Scalars['Int']>;
  product_tax_code?: Maybe<Scalars['String']>;
  calculated_price?: Maybe<Scalars['Float']>;
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  brand_id?: Maybe<Scalars['Int']>;
  option_set_id?: Maybe<Scalars['Int']>;
  option_set_display?: Maybe<Scalars['String']>;
  inventory_level?: Maybe<Scalars['Int']>;
  inventory_warning_level?: Maybe<Scalars['Int']>;
  inventory_tracking?: Maybe<Scalars['String']>;
  reviews_rating_sum?: Maybe<Scalars['Int']>;
  reviews_count?: Maybe<Scalars['Int']>;
  total_sold?: Maybe<Scalars['Int']>;
  fixed_cost_shipping_price?: Maybe<Scalars['Int']>;
  is_free_shipping?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  is_featured?: Maybe<Scalars['Boolean']>;
  related_products?: Maybe<Array<Maybe<Scalars['Int']>>>;
  warranty?: Maybe<Scalars['String']>;
  bin_picking_number?: Maybe<Scalars['String']>;
  layout_file?: Maybe<Scalars['String']>;
  upc?: Maybe<Scalars['String']>;
  mpn?: Maybe<Scalars['String']>;
  gtin?: Maybe<Scalars['String']>;
  search_keywords?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  availability_description?: Maybe<Scalars['String']>;
  gift_wrapping_options_type?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['String']>;
  is_condition_shown?: Maybe<Scalars['Boolean']>;
  order_quantity_minimum?: Maybe<Scalars['Int']>;
  order_quantity_maximum?: Maybe<Scalars['Int']>;
  page_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_modified?: Maybe<Scalars['Date']>;
  view_count?: Maybe<Scalars['Int']>;
  preorder_message?: Maybe<Scalars['String']>;
  is_preorder_only?: Maybe<Scalars['Boolean']>;
  is_price_hidden?: Maybe<Scalars['Boolean']>;
  price_hidden_label?: Maybe<Scalars['String']>;
  custom_url?: Maybe<BigCommerceProductsCustom_Url>;
  base_variant_id?: Maybe<Scalars['Int']>;
  open_graph_type?: Maybe<Scalars['String']>;
  open_graph_title?: Maybe<Scalars['String']>;
  open_graph_description?: Maybe<Scalars['String']>;
  open_graph_use_meta_description?: Maybe<Scalars['Boolean']>;
  open_graph_use_product_name?: Maybe<Scalars['Boolean']>;
  open_graph_use_image?: Maybe<Scalars['Boolean']>;
  bigcommerce_id?: Maybe<Scalars['Int']>;
};


export type BigCommerceProductsDate_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type BigCommerceProductsDate_ModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type BigCommerceProductsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BigCommerceProductsEdge>;
  nodes: Array<BigCommerceProducts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<BigCommerceProductsGroupConnection>;
};


export type BigCommerceProductsConnectionDistinctArgs = {
  field: BigCommerceProductsFieldsEnum;
};


export type BigCommerceProductsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BigCommerceProductsFieldsEnum;
};

export type BigCommerceProductsCustom_Url = {
  url?: Maybe<Scalars['String']>;
  is_customized?: Maybe<Scalars['Boolean']>;
};

export type BigCommerceProductsCustom_UrlFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  is_customized?: Maybe<BooleanQueryOperatorInput>;
};

export type BigCommerceProductsEdge = {
  next?: Maybe<BigCommerceProducts>;
  node: BigCommerceProducts;
  previous?: Maybe<BigCommerceProducts>;
};

export type BigCommerceProductsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'sku'
  | 'description'
  | 'weight'
  | 'width'
  | 'depth'
  | 'height'
  | 'price'
  | 'cost_price'
  | 'retail_price'
  | 'sale_price'
  | 'map_price'
  | 'tax_class_id'
  | 'product_tax_code'
  | 'calculated_price'
  | 'categories'
  | 'brand_id'
  | 'option_set_id'
  | 'option_set_display'
  | 'inventory_level'
  | 'inventory_warning_level'
  | 'inventory_tracking'
  | 'reviews_rating_sum'
  | 'reviews_count'
  | 'total_sold'
  | 'fixed_cost_shipping_price'
  | 'is_free_shipping'
  | 'is_visible'
  | 'is_featured'
  | 'related_products'
  | 'warranty'
  | 'bin_picking_number'
  | 'layout_file'
  | 'upc'
  | 'mpn'
  | 'gtin'
  | 'search_keywords'
  | 'availability'
  | 'availability_description'
  | 'gift_wrapping_options_type'
  | 'sort_order'
  | 'condition'
  | 'is_condition_shown'
  | 'order_quantity_minimum'
  | 'order_quantity_maximum'
  | 'page_title'
  | 'meta_description'
  | 'date_created'
  | 'date_modified'
  | 'view_count'
  | 'preorder_message'
  | 'is_preorder_only'
  | 'is_price_hidden'
  | 'price_hidden_label'
  | 'custom_url___url'
  | 'custom_url___is_customized'
  | 'base_variant_id'
  | 'open_graph_type'
  | 'open_graph_title'
  | 'open_graph_description'
  | 'open_graph_use_meta_description'
  | 'open_graph_use_product_name'
  | 'open_graph_use_image'
  | 'bigcommerce_id';

export type BigCommerceProductsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  cost_price?: Maybe<IntQueryOperatorInput>;
  retail_price?: Maybe<IntQueryOperatorInput>;
  sale_price?: Maybe<IntQueryOperatorInput>;
  map_price?: Maybe<IntQueryOperatorInput>;
  tax_class_id?: Maybe<IntQueryOperatorInput>;
  product_tax_code?: Maybe<StringQueryOperatorInput>;
  calculated_price?: Maybe<FloatQueryOperatorInput>;
  categories?: Maybe<IntQueryOperatorInput>;
  brand_id?: Maybe<IntQueryOperatorInput>;
  option_set_id?: Maybe<IntQueryOperatorInput>;
  option_set_display?: Maybe<StringQueryOperatorInput>;
  inventory_level?: Maybe<IntQueryOperatorInput>;
  inventory_warning_level?: Maybe<IntQueryOperatorInput>;
  inventory_tracking?: Maybe<StringQueryOperatorInput>;
  reviews_rating_sum?: Maybe<IntQueryOperatorInput>;
  reviews_count?: Maybe<IntQueryOperatorInput>;
  total_sold?: Maybe<IntQueryOperatorInput>;
  fixed_cost_shipping_price?: Maybe<IntQueryOperatorInput>;
  is_free_shipping?: Maybe<BooleanQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  is_featured?: Maybe<BooleanQueryOperatorInput>;
  related_products?: Maybe<IntQueryOperatorInput>;
  warranty?: Maybe<StringQueryOperatorInput>;
  bin_picking_number?: Maybe<StringQueryOperatorInput>;
  layout_file?: Maybe<StringQueryOperatorInput>;
  upc?: Maybe<StringQueryOperatorInput>;
  mpn?: Maybe<StringQueryOperatorInput>;
  gtin?: Maybe<StringQueryOperatorInput>;
  search_keywords?: Maybe<StringQueryOperatorInput>;
  availability?: Maybe<StringQueryOperatorInput>;
  availability_description?: Maybe<StringQueryOperatorInput>;
  gift_wrapping_options_type?: Maybe<StringQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  condition?: Maybe<StringQueryOperatorInput>;
  is_condition_shown?: Maybe<BooleanQueryOperatorInput>;
  order_quantity_minimum?: Maybe<IntQueryOperatorInput>;
  order_quantity_maximum?: Maybe<IntQueryOperatorInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  date_created?: Maybe<DateQueryOperatorInput>;
  date_modified?: Maybe<DateQueryOperatorInput>;
  view_count?: Maybe<IntQueryOperatorInput>;
  preorder_message?: Maybe<StringQueryOperatorInput>;
  is_preorder_only?: Maybe<BooleanQueryOperatorInput>;
  is_price_hidden?: Maybe<BooleanQueryOperatorInput>;
  price_hidden_label?: Maybe<StringQueryOperatorInput>;
  custom_url?: Maybe<BigCommerceProductsCustom_UrlFilterInput>;
  base_variant_id?: Maybe<IntQueryOperatorInput>;
  open_graph_type?: Maybe<StringQueryOperatorInput>;
  open_graph_title?: Maybe<StringQueryOperatorInput>;
  open_graph_description?: Maybe<StringQueryOperatorInput>;
  open_graph_use_meta_description?: Maybe<BooleanQueryOperatorInput>;
  open_graph_use_product_name?: Maybe<BooleanQueryOperatorInput>;
  open_graph_use_image?: Maybe<BooleanQueryOperatorInput>;
  bigcommerce_id?: Maybe<IntQueryOperatorInput>;
};

export type BigCommerceProductsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BigCommerceProductsEdge>;
  nodes: Array<BigCommerceProducts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type BigCommerceProductsSortInput = {
  fields?: Maybe<Array<Maybe<BigCommerceProductsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type Contentstack_Assets = Node & {
  url?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  file_size?: Maybe<Scalars['Date']>;
  filename?: Maybe<Scalars['String']>;
  is_dir?: Maybe<Scalars['Boolean']>;
  _version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_AssetsPublish_Details>;
  dimension?: Maybe<Contentstack_AssetsDimension>;
  localAsset?: Maybe<File>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Contentstack_AssetsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Contentstack_AssetsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Contentstack_AssetsFile_SizeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_AssetsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_AssetsEdge>;
  nodes: Array<Contentstack_Assets>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_AssetsGroupConnection>;
};


export type Contentstack_AssetsConnectionDistinctArgs = {
  field: Contentstack_AssetsFieldsEnum;
};


export type Contentstack_AssetsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_AssetsFieldsEnum;
};

export type Contentstack_AssetsDimension = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Contentstack_AssetsDimensionFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type Contentstack_AssetsEdge = {
  next?: Maybe<Contentstack_Assets>;
  node: Contentstack_Assets;
  previous?: Maybe<Contentstack_Assets>;
};

export type Contentstack_AssetsFieldsEnum = 
  | 'url'
  | 'uid'
  | 'created_at'
  | 'updated_at'
  | 'created_by'
  | 'updated_by'
  | 'content_type'
  | 'file_size'
  | 'filename'
  | 'is_dir'
  | '_version'
  | 'title'
  | 'publish_details___environment'
  | 'publish_details___locale'
  | 'publish_details___time'
  | 'publish_details___user'
  | 'dimension___height'
  | 'dimension___width'
  | 'localAsset___sourceInstanceName'
  | 'localAsset___absolutePath'
  | 'localAsset___relativePath'
  | 'localAsset___extension'
  | 'localAsset___size'
  | 'localAsset___prettySize'
  | 'localAsset___modifiedTime'
  | 'localAsset___accessTime'
  | 'localAsset___changeTime'
  | 'localAsset___birthTime'
  | 'localAsset___root'
  | 'localAsset___dir'
  | 'localAsset___base'
  | 'localAsset___ext'
  | 'localAsset___name'
  | 'localAsset___relativeDirectory'
  | 'localAsset___dev'
  | 'localAsset___mode'
  | 'localAsset___nlink'
  | 'localAsset___uid'
  | 'localAsset___gid'
  | 'localAsset___rdev'
  | 'localAsset___ino'
  | 'localAsset___atimeMs'
  | 'localAsset___mtimeMs'
  | 'localAsset___ctimeMs'
  | 'localAsset___atime'
  | 'localAsset___mtime'
  | 'localAsset___ctime'
  | 'localAsset___birthtime'
  | 'localAsset___birthtimeMs'
  | 'localAsset___blksize'
  | 'localAsset___blocks'
  | 'localAsset___url'
  | 'localAsset___updated_at'
  | 'localAsset___publicURL'
  | 'localAsset___childrenImageSharp'
  | 'localAsset___childrenImageSharp___fixed___base64'
  | 'localAsset___childrenImageSharp___fixed___tracedSVG'
  | 'localAsset___childrenImageSharp___fixed___aspectRatio'
  | 'localAsset___childrenImageSharp___fixed___width'
  | 'localAsset___childrenImageSharp___fixed___height'
  | 'localAsset___childrenImageSharp___fixed___src'
  | 'localAsset___childrenImageSharp___fixed___srcSet'
  | 'localAsset___childrenImageSharp___fixed___srcWebp'
  | 'localAsset___childrenImageSharp___fixed___srcSetWebp'
  | 'localAsset___childrenImageSharp___fixed___originalName'
  | 'localAsset___childrenImageSharp___resolutions___base64'
  | 'localAsset___childrenImageSharp___resolutions___tracedSVG'
  | 'localAsset___childrenImageSharp___resolutions___aspectRatio'
  | 'localAsset___childrenImageSharp___resolutions___width'
  | 'localAsset___childrenImageSharp___resolutions___height'
  | 'localAsset___childrenImageSharp___resolutions___src'
  | 'localAsset___childrenImageSharp___resolutions___srcSet'
  | 'localAsset___childrenImageSharp___resolutions___srcWebp'
  | 'localAsset___childrenImageSharp___resolutions___srcSetWebp'
  | 'localAsset___childrenImageSharp___resolutions___originalName'
  | 'localAsset___childrenImageSharp___fluid___base64'
  | 'localAsset___childrenImageSharp___fluid___tracedSVG'
  | 'localAsset___childrenImageSharp___fluid___aspectRatio'
  | 'localAsset___childrenImageSharp___fluid___src'
  | 'localAsset___childrenImageSharp___fluid___srcSet'
  | 'localAsset___childrenImageSharp___fluid___srcWebp'
  | 'localAsset___childrenImageSharp___fluid___srcSetWebp'
  | 'localAsset___childrenImageSharp___fluid___sizes'
  | 'localAsset___childrenImageSharp___fluid___originalImg'
  | 'localAsset___childrenImageSharp___fluid___originalName'
  | 'localAsset___childrenImageSharp___fluid___presentationWidth'
  | 'localAsset___childrenImageSharp___fluid___presentationHeight'
  | 'localAsset___childrenImageSharp___sizes___base64'
  | 'localAsset___childrenImageSharp___sizes___tracedSVG'
  | 'localAsset___childrenImageSharp___sizes___aspectRatio'
  | 'localAsset___childrenImageSharp___sizes___src'
  | 'localAsset___childrenImageSharp___sizes___srcSet'
  | 'localAsset___childrenImageSharp___sizes___srcWebp'
  | 'localAsset___childrenImageSharp___sizes___srcSetWebp'
  | 'localAsset___childrenImageSharp___sizes___sizes'
  | 'localAsset___childrenImageSharp___sizes___originalImg'
  | 'localAsset___childrenImageSharp___sizes___originalName'
  | 'localAsset___childrenImageSharp___sizes___presentationWidth'
  | 'localAsset___childrenImageSharp___sizes___presentationHeight'
  | 'localAsset___childrenImageSharp___gatsbyImageData'
  | 'localAsset___childrenImageSharp___original___width'
  | 'localAsset___childrenImageSharp___original___height'
  | 'localAsset___childrenImageSharp___original___src'
  | 'localAsset___childrenImageSharp___resize___src'
  | 'localAsset___childrenImageSharp___resize___tracedSVG'
  | 'localAsset___childrenImageSharp___resize___width'
  | 'localAsset___childrenImageSharp___resize___height'
  | 'localAsset___childrenImageSharp___resize___aspectRatio'
  | 'localAsset___childrenImageSharp___resize___originalName'
  | 'localAsset___childrenImageSharp___id'
  | 'localAsset___childrenImageSharp___parent___id'
  | 'localAsset___childrenImageSharp___parent___children'
  | 'localAsset___childrenImageSharp___children'
  | 'localAsset___childrenImageSharp___children___id'
  | 'localAsset___childrenImageSharp___children___children'
  | 'localAsset___childrenImageSharp___internal___content'
  | 'localAsset___childrenImageSharp___internal___contentDigest'
  | 'localAsset___childrenImageSharp___internal___description'
  | 'localAsset___childrenImageSharp___internal___fieldOwners'
  | 'localAsset___childrenImageSharp___internal___ignoreType'
  | 'localAsset___childrenImageSharp___internal___mediaType'
  | 'localAsset___childrenImageSharp___internal___owner'
  | 'localAsset___childrenImageSharp___internal___type'
  | 'localAsset___childImageSharp___fixed___base64'
  | 'localAsset___childImageSharp___fixed___tracedSVG'
  | 'localAsset___childImageSharp___fixed___aspectRatio'
  | 'localAsset___childImageSharp___fixed___width'
  | 'localAsset___childImageSharp___fixed___height'
  | 'localAsset___childImageSharp___fixed___src'
  | 'localAsset___childImageSharp___fixed___srcSet'
  | 'localAsset___childImageSharp___fixed___srcWebp'
  | 'localAsset___childImageSharp___fixed___srcSetWebp'
  | 'localAsset___childImageSharp___fixed___originalName'
  | 'localAsset___childImageSharp___resolutions___base64'
  | 'localAsset___childImageSharp___resolutions___tracedSVG'
  | 'localAsset___childImageSharp___resolutions___aspectRatio'
  | 'localAsset___childImageSharp___resolutions___width'
  | 'localAsset___childImageSharp___resolutions___height'
  | 'localAsset___childImageSharp___resolutions___src'
  | 'localAsset___childImageSharp___resolutions___srcSet'
  | 'localAsset___childImageSharp___resolutions___srcWebp'
  | 'localAsset___childImageSharp___resolutions___srcSetWebp'
  | 'localAsset___childImageSharp___resolutions___originalName'
  | 'localAsset___childImageSharp___fluid___base64'
  | 'localAsset___childImageSharp___fluid___tracedSVG'
  | 'localAsset___childImageSharp___fluid___aspectRatio'
  | 'localAsset___childImageSharp___fluid___src'
  | 'localAsset___childImageSharp___fluid___srcSet'
  | 'localAsset___childImageSharp___fluid___srcWebp'
  | 'localAsset___childImageSharp___fluid___srcSetWebp'
  | 'localAsset___childImageSharp___fluid___sizes'
  | 'localAsset___childImageSharp___fluid___originalImg'
  | 'localAsset___childImageSharp___fluid___originalName'
  | 'localAsset___childImageSharp___fluid___presentationWidth'
  | 'localAsset___childImageSharp___fluid___presentationHeight'
  | 'localAsset___childImageSharp___sizes___base64'
  | 'localAsset___childImageSharp___sizes___tracedSVG'
  | 'localAsset___childImageSharp___sizes___aspectRatio'
  | 'localAsset___childImageSharp___sizes___src'
  | 'localAsset___childImageSharp___sizes___srcSet'
  | 'localAsset___childImageSharp___sizes___srcWebp'
  | 'localAsset___childImageSharp___sizes___srcSetWebp'
  | 'localAsset___childImageSharp___sizes___sizes'
  | 'localAsset___childImageSharp___sizes___originalImg'
  | 'localAsset___childImageSharp___sizes___originalName'
  | 'localAsset___childImageSharp___sizes___presentationWidth'
  | 'localAsset___childImageSharp___sizes___presentationHeight'
  | 'localAsset___childImageSharp___gatsbyImageData'
  | 'localAsset___childImageSharp___original___width'
  | 'localAsset___childImageSharp___original___height'
  | 'localAsset___childImageSharp___original___src'
  | 'localAsset___childImageSharp___resize___src'
  | 'localAsset___childImageSharp___resize___tracedSVG'
  | 'localAsset___childImageSharp___resize___width'
  | 'localAsset___childImageSharp___resize___height'
  | 'localAsset___childImageSharp___resize___aspectRatio'
  | 'localAsset___childImageSharp___resize___originalName'
  | 'localAsset___childImageSharp___id'
  | 'localAsset___childImageSharp___parent___id'
  | 'localAsset___childImageSharp___parent___children'
  | 'localAsset___childImageSharp___children'
  | 'localAsset___childImageSharp___children___id'
  | 'localAsset___childImageSharp___children___children'
  | 'localAsset___childImageSharp___internal___content'
  | 'localAsset___childImageSharp___internal___contentDigest'
  | 'localAsset___childImageSharp___internal___description'
  | 'localAsset___childImageSharp___internal___fieldOwners'
  | 'localAsset___childImageSharp___internal___ignoreType'
  | 'localAsset___childImageSharp___internal___mediaType'
  | 'localAsset___childImageSharp___internal___owner'
  | 'localAsset___childImageSharp___internal___type'
  | 'localAsset___id'
  | 'localAsset___parent___id'
  | 'localAsset___parent___parent___id'
  | 'localAsset___parent___parent___children'
  | 'localAsset___parent___children'
  | 'localAsset___parent___children___id'
  | 'localAsset___parent___children___children'
  | 'localAsset___parent___internal___content'
  | 'localAsset___parent___internal___contentDigest'
  | 'localAsset___parent___internal___description'
  | 'localAsset___parent___internal___fieldOwners'
  | 'localAsset___parent___internal___ignoreType'
  | 'localAsset___parent___internal___mediaType'
  | 'localAsset___parent___internal___owner'
  | 'localAsset___parent___internal___type'
  | 'localAsset___children'
  | 'localAsset___children___id'
  | 'localAsset___children___parent___id'
  | 'localAsset___children___parent___children'
  | 'localAsset___children___children'
  | 'localAsset___children___children___id'
  | 'localAsset___children___children___children'
  | 'localAsset___children___internal___content'
  | 'localAsset___children___internal___contentDigest'
  | 'localAsset___children___internal___description'
  | 'localAsset___children___internal___fieldOwners'
  | 'localAsset___children___internal___ignoreType'
  | 'localAsset___children___internal___mediaType'
  | 'localAsset___children___internal___owner'
  | 'localAsset___children___internal___type'
  | 'localAsset___internal___content'
  | 'localAsset___internal___contentDigest'
  | 'localAsset___internal___description'
  | 'localAsset___internal___fieldOwners'
  | 'localAsset___internal___ignoreType'
  | 'localAsset___internal___mediaType'
  | 'localAsset___internal___owner'
  | 'localAsset___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_AssetsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  content_type?: Maybe<StringQueryOperatorInput>;
  file_size?: Maybe<DateQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  is_dir?: Maybe<BooleanQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_AssetsPublish_DetailsFilterInput>;
  dimension?: Maybe<Contentstack_AssetsDimensionFilterInput>;
  localAsset?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_AssetsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_AssetsEdge>;
  nodes: Array<Contentstack_Assets>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_AssetsPublish_Details = {
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Date']>;
  user?: Maybe<Scalars['String']>;
};


export type Contentstack_AssetsPublish_DetailsTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_AssetsPublish_DetailsFilterInput = {
  environment?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<DateQueryOperatorInput>;
  user?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_AssetsSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_AssetsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Banners = Node & {
  title: Scalars['String'];
  url?: Maybe<Linktype>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Banners_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Banners_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Banners_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_BannersConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_BannersEdge>;
  nodes: Array<Contentstack_Banners>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_BannersGroupConnection>;
};


export type Contentstack_BannersConnectionDistinctArgs = {
  field: Contentstack_BannersFieldsEnum;
};


export type Contentstack_BannersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_BannersFieldsEnum;
};

export type Contentstack_BannersEdge = {
  next?: Maybe<Contentstack_Banners>;
  node: Contentstack_Banners;
  previous?: Maybe<Contentstack_Banners>;
};

export type Contentstack_BannersFieldsEnum = 
  | 'title'
  | 'url___title'
  | 'url___href'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_BannersFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<LinktypeFilterInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Banners_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_BannersGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_BannersEdge>;
  nodes: Array<Contentstack_Banners>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_BannersSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_BannersFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Blog_Articles = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  rich_text_editor?: Maybe<Scalars['String']>;
  modular_blocks?: Maybe<Array<Maybe<Contentstack_Blog_Articles_Modular_Blocks>>>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Blog_Articles_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Blog_Articles_Modular_Blocks = {
  article_cards?: Maybe<Contentstack_Blog_Articles_Modular_Blocksarticle_Cards>;
};

export type Contentstack_Blog_Articles_Modular_Blocksarticle_Cards = {
  group?: Maybe<Array<Maybe<Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_Group>>>;
};

export type Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_Group = {
  title: Scalars['String'];
  title_primary?: Maybe<Scalars['String']>;
  title_secondary?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  link?: Maybe<Linktype>;
};

export type Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_GroupFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  title_primary?: Maybe<StringQueryOperatorInput>;
  title_secondary?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<LinktypeFilterInput>;
};

export type Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_GroupFilterListInput = {
  elemMatch?: Maybe<Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_GroupFilterInput>;
};

export type Contentstack_Blog_Articles_Modular_Blocksarticle_CardsFilterInput = {
  group?: Maybe<Contentstack_Blog_Articles_Modular_Blocksarticle_Cards_GroupFilterListInput>;
};

export type Contentstack_Blog_Articles_Modular_BlocksFilterInput = {
  article_cards?: Maybe<Contentstack_Blog_Articles_Modular_Blocksarticle_CardsFilterInput>;
};

export type Contentstack_Blog_Articles_Modular_BlocksFilterListInput = {
  elemMatch?: Maybe<Contentstack_Blog_Articles_Modular_BlocksFilterInput>;
};

export type Contentstack_Blog_Articles_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Blog_Articles_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Blog_ArticlesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Blog_ArticlesEdge>;
  nodes: Array<Contentstack_Blog_Articles>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_Blog_ArticlesGroupConnection>;
};


export type Contentstack_Blog_ArticlesConnectionDistinctArgs = {
  field: Contentstack_Blog_ArticlesFieldsEnum;
};


export type Contentstack_Blog_ArticlesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_Blog_ArticlesFieldsEnum;
};

export type Contentstack_Blog_ArticlesEdge = {
  next?: Maybe<Contentstack_Blog_Articles>;
  node: Contentstack_Blog_Articles;
  previous?: Maybe<Contentstack_Blog_Articles>;
};

export type Contentstack_Blog_ArticlesFieldsEnum = 
  | 'title'
  | 'url'
  | 'rich_text_editor'
  | 'modular_blocks'
  | 'modular_blocks___article_cards___group'
  | 'modular_blocks___article_cards___group___title'
  | 'modular_blocks___article_cards___group___title_primary'
  | 'modular_blocks___article_cards___group___title_secondary'
  | 'modular_blocks___article_cards___group___paragraph'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_Blog_ArticlesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  rich_text_editor?: Maybe<StringQueryOperatorInput>;
  modular_blocks?: Maybe<Contentstack_Blog_Articles_Modular_BlocksFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Blog_Articles_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_Blog_ArticlesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Blog_ArticlesEdge>;
  nodes: Array<Contentstack_Blog_Articles>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_Blog_ArticlesSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_Blog_ArticlesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Categories = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parent_categories?: Maybe<Array<Maybe<Contentstack_Categories>>>;
  menus?: Maybe<Array<Maybe<Contentstack_Menus>>>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Categories_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Categories_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Categories_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_CategoriesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_CategoriesEdge>;
  nodes: Array<Contentstack_Categories>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_CategoriesGroupConnection>;
};


export type Contentstack_CategoriesConnectionDistinctArgs = {
  field: Contentstack_CategoriesFieldsEnum;
};


export type Contentstack_CategoriesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_CategoriesFieldsEnum;
};

export type Contentstack_CategoriesEdge = {
  next?: Maybe<Contentstack_Categories>;
  node: Contentstack_Categories;
  previous?: Maybe<Contentstack_Categories>;
};

export type Contentstack_CategoriesFieldsEnum = 
  | 'title'
  | 'url'
  | 'description'
  | 'parent_categories'
  | 'parent_categories___title'
  | 'parent_categories___url'
  | 'parent_categories___description'
  | 'parent_categories___parent_categories'
  | 'parent_categories___parent_categories___title'
  | 'parent_categories___parent_categories___url'
  | 'parent_categories___parent_categories___description'
  | 'parent_categories___parent_categories___parent_categories'
  | 'parent_categories___parent_categories___parent_categories___title'
  | 'parent_categories___parent_categories___parent_categories___url'
  | 'parent_categories___parent_categories___parent_categories___description'
  | 'parent_categories___parent_categories___parent_categories___parent_categories'
  | 'parent_categories___parent_categories___parent_categories___menus'
  | 'parent_categories___parent_categories___parent_categories___uid'
  | 'parent_categories___parent_categories___parent_categories___locale'
  | 'parent_categories___parent_categories___parent_categories___updated_at'
  | 'parent_categories___parent_categories___parent_categories___id'
  | 'parent_categories___parent_categories___parent_categories___children'
  | 'parent_categories___parent_categories___menus'
  | 'parent_categories___parent_categories___menus___title'
  | 'parent_categories___parent_categories___menus___sub_menus'
  | 'parent_categories___parent_categories___menus___links'
  | 'parent_categories___parent_categories___menus___slot'
  | 'parent_categories___parent_categories___menus___uid'
  | 'parent_categories___parent_categories___menus___locale'
  | 'parent_categories___parent_categories___menus___updated_at'
  | 'parent_categories___parent_categories___menus____version'
  | 'parent_categories___parent_categories___menus___created_at'
  | 'parent_categories___parent_categories___menus___created_by'
  | 'parent_categories___parent_categories___menus___updated_by'
  | 'parent_categories___parent_categories___menus___id'
  | 'parent_categories___parent_categories___menus___children'
  | 'parent_categories___parent_categories___uid'
  | 'parent_categories___parent_categories___locale'
  | 'parent_categories___parent_categories___publish_details___locale'
  | 'parent_categories___parent_categories___updated_at'
  | 'parent_categories___parent_categories___id'
  | 'parent_categories___parent_categories___parent___id'
  | 'parent_categories___parent_categories___parent___children'
  | 'parent_categories___parent_categories___children'
  | 'parent_categories___parent_categories___children___id'
  | 'parent_categories___parent_categories___children___children'
  | 'parent_categories___parent_categories___internal___content'
  | 'parent_categories___parent_categories___internal___contentDigest'
  | 'parent_categories___parent_categories___internal___description'
  | 'parent_categories___parent_categories___internal___fieldOwners'
  | 'parent_categories___parent_categories___internal___ignoreType'
  | 'parent_categories___parent_categories___internal___mediaType'
  | 'parent_categories___parent_categories___internal___owner'
  | 'parent_categories___parent_categories___internal___type'
  | 'parent_categories___menus'
  | 'parent_categories___menus___title'
  | 'parent_categories___menus___sub_menus'
  | 'parent_categories___menus___sub_menus___title'
  | 'parent_categories___menus___sub_menus___sub_menus'
  | 'parent_categories___menus___sub_menus___links'
  | 'parent_categories___menus___sub_menus___slot'
  | 'parent_categories___menus___sub_menus___uid'
  | 'parent_categories___menus___sub_menus___locale'
  | 'parent_categories___menus___sub_menus___updated_at'
  | 'parent_categories___menus___sub_menus____version'
  | 'parent_categories___menus___sub_menus___created_at'
  | 'parent_categories___menus___sub_menus___created_by'
  | 'parent_categories___menus___sub_menus___updated_by'
  | 'parent_categories___menus___sub_menus___id'
  | 'parent_categories___menus___sub_menus___children'
  | 'parent_categories___menus___links'
  | 'parent_categories___menus___links___text'
  | 'parent_categories___menus___slot'
  | 'parent_categories___menus___uid'
  | 'parent_categories___menus___locale'
  | 'parent_categories___menus___publish_details___locale'
  | 'parent_categories___menus___publish_details___environment'
  | 'parent_categories___menus___publish_details___time'
  | 'parent_categories___menus___publish_details___user'
  | 'parent_categories___menus___updated_at'
  | 'parent_categories___menus____version'
  | 'parent_categories___menus___created_at'
  | 'parent_categories___menus___created_by'
  | 'parent_categories___menus___updated_by'
  | 'parent_categories___menus___id'
  | 'parent_categories___menus___parent___id'
  | 'parent_categories___menus___parent___children'
  | 'parent_categories___menus___children'
  | 'parent_categories___menus___children___id'
  | 'parent_categories___menus___children___children'
  | 'parent_categories___menus___internal___content'
  | 'parent_categories___menus___internal___contentDigest'
  | 'parent_categories___menus___internal___description'
  | 'parent_categories___menus___internal___fieldOwners'
  | 'parent_categories___menus___internal___ignoreType'
  | 'parent_categories___menus___internal___mediaType'
  | 'parent_categories___menus___internal___owner'
  | 'parent_categories___menus___internal___type'
  | 'parent_categories___uid'
  | 'parent_categories___locale'
  | 'parent_categories___publish_details___locale'
  | 'parent_categories___updated_at'
  | 'parent_categories___id'
  | 'parent_categories___parent___id'
  | 'parent_categories___parent___parent___id'
  | 'parent_categories___parent___parent___children'
  | 'parent_categories___parent___children'
  | 'parent_categories___parent___children___id'
  | 'parent_categories___parent___children___children'
  | 'parent_categories___parent___internal___content'
  | 'parent_categories___parent___internal___contentDigest'
  | 'parent_categories___parent___internal___description'
  | 'parent_categories___parent___internal___fieldOwners'
  | 'parent_categories___parent___internal___ignoreType'
  | 'parent_categories___parent___internal___mediaType'
  | 'parent_categories___parent___internal___owner'
  | 'parent_categories___parent___internal___type'
  | 'parent_categories___children'
  | 'parent_categories___children___id'
  | 'parent_categories___children___parent___id'
  | 'parent_categories___children___parent___children'
  | 'parent_categories___children___children'
  | 'parent_categories___children___children___id'
  | 'parent_categories___children___children___children'
  | 'parent_categories___children___internal___content'
  | 'parent_categories___children___internal___contentDigest'
  | 'parent_categories___children___internal___description'
  | 'parent_categories___children___internal___fieldOwners'
  | 'parent_categories___children___internal___ignoreType'
  | 'parent_categories___children___internal___mediaType'
  | 'parent_categories___children___internal___owner'
  | 'parent_categories___children___internal___type'
  | 'parent_categories___internal___content'
  | 'parent_categories___internal___contentDigest'
  | 'parent_categories___internal___description'
  | 'parent_categories___internal___fieldOwners'
  | 'parent_categories___internal___ignoreType'
  | 'parent_categories___internal___mediaType'
  | 'parent_categories___internal___owner'
  | 'parent_categories___internal___type'
  | 'menus'
  | 'menus___title'
  | 'menus___sub_menus'
  | 'menus___sub_menus___title'
  | 'menus___sub_menus___sub_menus'
  | 'menus___sub_menus___sub_menus___title'
  | 'menus___sub_menus___sub_menus___sub_menus'
  | 'menus___sub_menus___sub_menus___links'
  | 'menus___sub_menus___sub_menus___slot'
  | 'menus___sub_menus___sub_menus___uid'
  | 'menus___sub_menus___sub_menus___locale'
  | 'menus___sub_menus___sub_menus___updated_at'
  | 'menus___sub_menus___sub_menus____version'
  | 'menus___sub_menus___sub_menus___created_at'
  | 'menus___sub_menus___sub_menus___created_by'
  | 'menus___sub_menus___sub_menus___updated_by'
  | 'menus___sub_menus___sub_menus___id'
  | 'menus___sub_menus___sub_menus___children'
  | 'menus___sub_menus___links'
  | 'menus___sub_menus___links___text'
  | 'menus___sub_menus___slot'
  | 'menus___sub_menus___uid'
  | 'menus___sub_menus___locale'
  | 'menus___sub_menus___publish_details___locale'
  | 'menus___sub_menus___publish_details___environment'
  | 'menus___sub_menus___publish_details___time'
  | 'menus___sub_menus___publish_details___user'
  | 'menus___sub_menus___updated_at'
  | 'menus___sub_menus____version'
  | 'menus___sub_menus___created_at'
  | 'menus___sub_menus___created_by'
  | 'menus___sub_menus___updated_by'
  | 'menus___sub_menus___id'
  | 'menus___sub_menus___parent___id'
  | 'menus___sub_menus___parent___children'
  | 'menus___sub_menus___children'
  | 'menus___sub_menus___children___id'
  | 'menus___sub_menus___children___children'
  | 'menus___sub_menus___internal___content'
  | 'menus___sub_menus___internal___contentDigest'
  | 'menus___sub_menus___internal___description'
  | 'menus___sub_menus___internal___fieldOwners'
  | 'menus___sub_menus___internal___ignoreType'
  | 'menus___sub_menus___internal___mediaType'
  | 'menus___sub_menus___internal___owner'
  | 'menus___sub_menus___internal___type'
  | 'menus___links'
  | 'menus___links___url___title'
  | 'menus___links___url___href'
  | 'menus___links___text'
  | 'menus___links___image___url'
  | 'menus___links___image___uid'
  | 'menus___links___image___created_at'
  | 'menus___links___image___updated_at'
  | 'menus___links___image___created_by'
  | 'menus___links___image___updated_by'
  | 'menus___links___image___content_type'
  | 'menus___links___image___file_size'
  | 'menus___links___image___filename'
  | 'menus___links___image___is_dir'
  | 'menus___links___image____version'
  | 'menus___links___image___title'
  | 'menus___links___image___id'
  | 'menus___links___image___children'
  | 'menus___slot'
  | 'menus___uid'
  | 'menus___locale'
  | 'menus___publish_details___locale'
  | 'menus___publish_details___environment'
  | 'menus___publish_details___time'
  | 'menus___publish_details___user'
  | 'menus___updated_at'
  | 'menus____version'
  | 'menus___created_at'
  | 'menus___created_by'
  | 'menus___updated_by'
  | 'menus___id'
  | 'menus___parent___id'
  | 'menus___parent___parent___id'
  | 'menus___parent___parent___children'
  | 'menus___parent___children'
  | 'menus___parent___children___id'
  | 'menus___parent___children___children'
  | 'menus___parent___internal___content'
  | 'menus___parent___internal___contentDigest'
  | 'menus___parent___internal___description'
  | 'menus___parent___internal___fieldOwners'
  | 'menus___parent___internal___ignoreType'
  | 'menus___parent___internal___mediaType'
  | 'menus___parent___internal___owner'
  | 'menus___parent___internal___type'
  | 'menus___children'
  | 'menus___children___id'
  | 'menus___children___parent___id'
  | 'menus___children___parent___children'
  | 'menus___children___children'
  | 'menus___children___children___id'
  | 'menus___children___children___children'
  | 'menus___children___internal___content'
  | 'menus___children___internal___contentDigest'
  | 'menus___children___internal___description'
  | 'menus___children___internal___fieldOwners'
  | 'menus___children___internal___ignoreType'
  | 'menus___children___internal___mediaType'
  | 'menus___children___internal___owner'
  | 'menus___children___internal___type'
  | 'menus___internal___content'
  | 'menus___internal___contentDigest'
  | 'menus___internal___description'
  | 'menus___internal___fieldOwners'
  | 'menus___internal___ignoreType'
  | 'menus___internal___mediaType'
  | 'menus___internal___owner'
  | 'menus___internal___type'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_CategoriesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  parent_categories?: Maybe<Contentstack_CategoriesFilterListInput>;
  menus?: Maybe<Contentstack_MenusFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Categories_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_CategoriesFilterListInput = {
  elemMatch?: Maybe<Contentstack_CategoriesFilterInput>;
};

export type Contentstack_CategoriesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_CategoriesEdge>;
  nodes: Array<Contentstack_Categories>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_CategoriesSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_CategoriesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Content_Spots = Node & {
  title: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Content_Spots_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Content_Spots_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Content_Spots_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Content_SpotsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Content_SpotsEdge>;
  nodes: Array<Contentstack_Content_Spots>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_Content_SpotsGroupConnection>;
};


export type Contentstack_Content_SpotsConnectionDistinctArgs = {
  field: Contentstack_Content_SpotsFieldsEnum;
};


export type Contentstack_Content_SpotsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_Content_SpotsFieldsEnum;
};

export type Contentstack_Content_SpotsContentstack_Frequently_Asked_QuestionsContentstack_IngredientsContentstack_PagesContentstack_Products_Union = Contentstack_Content_Spots | Contentstack_Frequently_Asked_Questions | Contentstack_Ingredients | Contentstack_Pages | Contentstack_Products;

export type Contentstack_Content_SpotsEdge = {
  next?: Maybe<Contentstack_Content_Spots>;
  node: Contentstack_Content_Spots;
  previous?: Maybe<Contentstack_Content_Spots>;
};

export type Contentstack_Content_SpotsFieldsEnum = 
  | 'title'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_Content_SpotsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Content_Spots_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_Content_SpotsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Content_SpotsEdge>;
  nodes: Array<Contentstack_Content_Spots>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_Content_SpotsSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_Content_SpotsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Frequently_Asked_Questions = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Frequently_Asked_Questions_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Frequently_Asked_Questions_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Frequently_Asked_Questions_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Frequently_Asked_QuestionsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Frequently_Asked_QuestionsEdge>;
  nodes: Array<Contentstack_Frequently_Asked_Questions>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_Frequently_Asked_QuestionsGroupConnection>;
};


export type Contentstack_Frequently_Asked_QuestionsConnectionDistinctArgs = {
  field: Contentstack_Frequently_Asked_QuestionsFieldsEnum;
};


export type Contentstack_Frequently_Asked_QuestionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_Frequently_Asked_QuestionsFieldsEnum;
};

export type Contentstack_Frequently_Asked_QuestionsEdge = {
  next?: Maybe<Contentstack_Frequently_Asked_Questions>;
  node: Contentstack_Frequently_Asked_Questions;
  previous?: Maybe<Contentstack_Frequently_Asked_Questions>;
};

export type Contentstack_Frequently_Asked_QuestionsFieldsEnum = 
  | 'title'
  | 'url'
  | 'answer'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_Frequently_Asked_QuestionsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  answer?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Frequently_Asked_Questions_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_Frequently_Asked_QuestionsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_Frequently_Asked_QuestionsEdge>;
  nodes: Array<Contentstack_Frequently_Asked_Questions>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_Frequently_Asked_QuestionsSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_Frequently_Asked_QuestionsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Ingredients = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Ingredients_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Ingredients_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Ingredients_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_IngredientsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_IngredientsEdge>;
  nodes: Array<Contentstack_Ingredients>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_IngredientsGroupConnection>;
};


export type Contentstack_IngredientsConnectionDistinctArgs = {
  field: Contentstack_IngredientsFieldsEnum;
};


export type Contentstack_IngredientsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_IngredientsFieldsEnum;
};

export type Contentstack_IngredientsEdge = {
  next?: Maybe<Contentstack_Ingredients>;
  node: Contentstack_Ingredients;
  previous?: Maybe<Contentstack_Ingredients>;
};

export type Contentstack_IngredientsFieldsEnum = 
  | 'title'
  | 'url'
  | 'description'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_IngredientsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Ingredients_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_IngredientsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_IngredientsEdge>;
  nodes: Array<Contentstack_Ingredients>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_IngredientsSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_IngredientsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Menus = Node & {
  title: Scalars['String'];
  sub_menus?: Maybe<Array<Maybe<Contentstack_Menus>>>;
  links?: Maybe<Array<Maybe<Contentstack_Menus_Links>>>;
  slot?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Menus_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  _version?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Contentstack_MenusCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Menus_Links = {
  url: Linktype;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Contentstack_Assets>;
};

export type Contentstack_Menus_LinksFilterInput = {
  url?: Maybe<LinktypeFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<Contentstack_AssetsFilterInput>;
};

export type Contentstack_Menus_LinksFilterListInput = {
  elemMatch?: Maybe<Contentstack_Menus_LinksFilterInput>;
};

export type Contentstack_Menus_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Date']>;
  user?: Maybe<Scalars['String']>;
};


export type Contentstack_Menus_Publish_DetailsTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Menus_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<DateQueryOperatorInput>;
  user?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_MenusConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_MenusEdge>;
  nodes: Array<Contentstack_Menus>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_MenusGroupConnection>;
};


export type Contentstack_MenusConnectionDistinctArgs = {
  field: Contentstack_MenusFieldsEnum;
};


export type Contentstack_MenusConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_MenusFieldsEnum;
};

export type Contentstack_MenusEdge = {
  next?: Maybe<Contentstack_Menus>;
  node: Contentstack_Menus;
  previous?: Maybe<Contentstack_Menus>;
};

export type Contentstack_MenusFieldsEnum = 
  | 'title'
  | 'sub_menus'
  | 'sub_menus___title'
  | 'sub_menus___sub_menus'
  | 'sub_menus___sub_menus___title'
  | 'sub_menus___sub_menus___sub_menus'
  | 'sub_menus___sub_menus___sub_menus___title'
  | 'sub_menus___sub_menus___sub_menus___sub_menus'
  | 'sub_menus___sub_menus___sub_menus___links'
  | 'sub_menus___sub_menus___sub_menus___slot'
  | 'sub_menus___sub_menus___sub_menus___uid'
  | 'sub_menus___sub_menus___sub_menus___locale'
  | 'sub_menus___sub_menus___sub_menus___updated_at'
  | 'sub_menus___sub_menus___sub_menus____version'
  | 'sub_menus___sub_menus___sub_menus___created_at'
  | 'sub_menus___sub_menus___sub_menus___created_by'
  | 'sub_menus___sub_menus___sub_menus___updated_by'
  | 'sub_menus___sub_menus___sub_menus___id'
  | 'sub_menus___sub_menus___sub_menus___children'
  | 'sub_menus___sub_menus___links'
  | 'sub_menus___sub_menus___links___text'
  | 'sub_menus___sub_menus___slot'
  | 'sub_menus___sub_menus___uid'
  | 'sub_menus___sub_menus___locale'
  | 'sub_menus___sub_menus___publish_details___locale'
  | 'sub_menus___sub_menus___publish_details___environment'
  | 'sub_menus___sub_menus___publish_details___time'
  | 'sub_menus___sub_menus___publish_details___user'
  | 'sub_menus___sub_menus___updated_at'
  | 'sub_menus___sub_menus____version'
  | 'sub_menus___sub_menus___created_at'
  | 'sub_menus___sub_menus___created_by'
  | 'sub_menus___sub_menus___updated_by'
  | 'sub_menus___sub_menus___id'
  | 'sub_menus___sub_menus___parent___id'
  | 'sub_menus___sub_menus___parent___children'
  | 'sub_menus___sub_menus___children'
  | 'sub_menus___sub_menus___children___id'
  | 'sub_menus___sub_menus___children___children'
  | 'sub_menus___sub_menus___internal___content'
  | 'sub_menus___sub_menus___internal___contentDigest'
  | 'sub_menus___sub_menus___internal___description'
  | 'sub_menus___sub_menus___internal___fieldOwners'
  | 'sub_menus___sub_menus___internal___ignoreType'
  | 'sub_menus___sub_menus___internal___mediaType'
  | 'sub_menus___sub_menus___internal___owner'
  | 'sub_menus___sub_menus___internal___type'
  | 'sub_menus___links'
  | 'sub_menus___links___url___title'
  | 'sub_menus___links___url___href'
  | 'sub_menus___links___text'
  | 'sub_menus___links___image___url'
  | 'sub_menus___links___image___uid'
  | 'sub_menus___links___image___created_at'
  | 'sub_menus___links___image___updated_at'
  | 'sub_menus___links___image___created_by'
  | 'sub_menus___links___image___updated_by'
  | 'sub_menus___links___image___content_type'
  | 'sub_menus___links___image___file_size'
  | 'sub_menus___links___image___filename'
  | 'sub_menus___links___image___is_dir'
  | 'sub_menus___links___image____version'
  | 'sub_menus___links___image___title'
  | 'sub_menus___links___image___id'
  | 'sub_menus___links___image___children'
  | 'sub_menus___slot'
  | 'sub_menus___uid'
  | 'sub_menus___locale'
  | 'sub_menus___publish_details___locale'
  | 'sub_menus___publish_details___environment'
  | 'sub_menus___publish_details___time'
  | 'sub_menus___publish_details___user'
  | 'sub_menus___updated_at'
  | 'sub_menus____version'
  | 'sub_menus___created_at'
  | 'sub_menus___created_by'
  | 'sub_menus___updated_by'
  | 'sub_menus___id'
  | 'sub_menus___parent___id'
  | 'sub_menus___parent___parent___id'
  | 'sub_menus___parent___parent___children'
  | 'sub_menus___parent___children'
  | 'sub_menus___parent___children___id'
  | 'sub_menus___parent___children___children'
  | 'sub_menus___parent___internal___content'
  | 'sub_menus___parent___internal___contentDigest'
  | 'sub_menus___parent___internal___description'
  | 'sub_menus___parent___internal___fieldOwners'
  | 'sub_menus___parent___internal___ignoreType'
  | 'sub_menus___parent___internal___mediaType'
  | 'sub_menus___parent___internal___owner'
  | 'sub_menus___parent___internal___type'
  | 'sub_menus___children'
  | 'sub_menus___children___id'
  | 'sub_menus___children___parent___id'
  | 'sub_menus___children___parent___children'
  | 'sub_menus___children___children'
  | 'sub_menus___children___children___id'
  | 'sub_menus___children___children___children'
  | 'sub_menus___children___internal___content'
  | 'sub_menus___children___internal___contentDigest'
  | 'sub_menus___children___internal___description'
  | 'sub_menus___children___internal___fieldOwners'
  | 'sub_menus___children___internal___ignoreType'
  | 'sub_menus___children___internal___mediaType'
  | 'sub_menus___children___internal___owner'
  | 'sub_menus___children___internal___type'
  | 'sub_menus___internal___content'
  | 'sub_menus___internal___contentDigest'
  | 'sub_menus___internal___description'
  | 'sub_menus___internal___fieldOwners'
  | 'sub_menus___internal___ignoreType'
  | 'sub_menus___internal___mediaType'
  | 'sub_menus___internal___owner'
  | 'sub_menus___internal___type'
  | 'links'
  | 'links___url___title'
  | 'links___url___href'
  | 'links___text'
  | 'links___image___url'
  | 'links___image___uid'
  | 'links___image___created_at'
  | 'links___image___updated_at'
  | 'links___image___created_by'
  | 'links___image___updated_by'
  | 'links___image___content_type'
  | 'links___image___file_size'
  | 'links___image___filename'
  | 'links___image___is_dir'
  | 'links___image____version'
  | 'links___image___title'
  | 'links___image___publish_details___environment'
  | 'links___image___publish_details___locale'
  | 'links___image___publish_details___time'
  | 'links___image___publish_details___user'
  | 'links___image___dimension___height'
  | 'links___image___dimension___width'
  | 'links___image___localAsset___sourceInstanceName'
  | 'links___image___localAsset___absolutePath'
  | 'links___image___localAsset___relativePath'
  | 'links___image___localAsset___extension'
  | 'links___image___localAsset___size'
  | 'links___image___localAsset___prettySize'
  | 'links___image___localAsset___modifiedTime'
  | 'links___image___localAsset___accessTime'
  | 'links___image___localAsset___changeTime'
  | 'links___image___localAsset___birthTime'
  | 'links___image___localAsset___root'
  | 'links___image___localAsset___dir'
  | 'links___image___localAsset___base'
  | 'links___image___localAsset___ext'
  | 'links___image___localAsset___name'
  | 'links___image___localAsset___relativeDirectory'
  | 'links___image___localAsset___dev'
  | 'links___image___localAsset___mode'
  | 'links___image___localAsset___nlink'
  | 'links___image___localAsset___uid'
  | 'links___image___localAsset___gid'
  | 'links___image___localAsset___rdev'
  | 'links___image___localAsset___ino'
  | 'links___image___localAsset___atimeMs'
  | 'links___image___localAsset___mtimeMs'
  | 'links___image___localAsset___ctimeMs'
  | 'links___image___localAsset___atime'
  | 'links___image___localAsset___mtime'
  | 'links___image___localAsset___ctime'
  | 'links___image___localAsset___birthtime'
  | 'links___image___localAsset___birthtimeMs'
  | 'links___image___localAsset___blksize'
  | 'links___image___localAsset___blocks'
  | 'links___image___localAsset___url'
  | 'links___image___localAsset___updated_at'
  | 'links___image___localAsset___publicURL'
  | 'links___image___localAsset___childrenImageSharp'
  | 'links___image___localAsset___id'
  | 'links___image___localAsset___children'
  | 'links___image___id'
  | 'links___image___parent___id'
  | 'links___image___parent___children'
  | 'links___image___children'
  | 'links___image___children___id'
  | 'links___image___children___children'
  | 'links___image___internal___content'
  | 'links___image___internal___contentDigest'
  | 'links___image___internal___description'
  | 'links___image___internal___fieldOwners'
  | 'links___image___internal___ignoreType'
  | 'links___image___internal___mediaType'
  | 'links___image___internal___owner'
  | 'links___image___internal___type'
  | 'slot'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'publish_details___environment'
  | 'publish_details___time'
  | 'publish_details___user'
  | 'updated_at'
  | '_version'
  | 'created_at'
  | 'created_by'
  | 'updated_by'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_MenusFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  sub_menus?: Maybe<Contentstack_MenusFilterListInput>;
  links?: Maybe<Contentstack_Menus_LinksFilterListInput>;
  slot?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Menus_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_MenusFilterListInput = {
  elemMatch?: Maybe<Contentstack_MenusFilterInput>;
};

export type Contentstack_MenusGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_MenusEdge>;
  nodes: Array<Contentstack_Menus>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_MenusSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_MenusFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Pages = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  template: Scalars['String'];
  modular_blocks?: Maybe<Array<Maybe<Contentstack_Pages_Modular_Blocks>>>;
  reference?: Maybe<Array<Maybe<Contentstack_Menus>>>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Pages_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  _version?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Contentstack_PagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Pages_Modular_Blocks = {
  article_card?: Maybe<Contentstack_Pages_Modular_Blocksarticle_Card>;
  article_cards?: Maybe<Contentstack_Pages_Modular_Blocksarticle_Cards>;
  carousel?: Maybe<Contentstack_Pages_Modular_Blockscarousel>;
  collage?: Maybe<Contentstack_Pages_Modular_Blockscollage>;
  icon_list?: Maybe<Contentstack_Pages_Modular_Blocksicon_List>;
  image?: Maybe<Contentstack_Pages_Modular_Blocksimage>;
  image_with_overlay?: Maybe<Contentstack_Pages_Modular_Blocksimage_With_Overlay>;
  introduction?: Maybe<Contentstack_Pages_Modular_Blocksintroduction>;
  paragraph?: Maybe<Contentstack_Pages_Modular_Blocksparagraph>;
  quotation?: Maybe<Contentstack_Pages_Modular_Blocksquotation>;
  video?: Maybe<Contentstack_Pages_Modular_Blocksvideo>;
};

export type Contentstack_Pages_Modular_Blocksarticle_Card = {
  title: Scalars['String'];
  title_primary?: Maybe<Scalars['String']>;
  title_secondary?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  link?: Maybe<Linktype>;
};

export type Contentstack_Pages_Modular_Blocksarticle_CardFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  title_primary?: Maybe<StringQueryOperatorInput>;
  title_secondary?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<LinktypeFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksarticle_Cards = {
  group?: Maybe<Array<Maybe<Contentstack_Pages_Modular_Blocksarticle_Cards_Group>>>;
};

export type Contentstack_Pages_Modular_Blocksarticle_Cards_Group = {
  title: Scalars['String'];
  title_primary?: Maybe<Scalars['String']>;
  title_secondary?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  link?: Maybe<Linktype>;
};

export type Contentstack_Pages_Modular_Blocksarticle_Cards_GroupFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  title_primary?: Maybe<StringQueryOperatorInput>;
  title_secondary?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<LinktypeFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksarticle_Cards_GroupFilterListInput = {
  elemMatch?: Maybe<Contentstack_Pages_Modular_Blocksarticle_Cards_GroupFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksarticle_CardsFilterInput = {
  group?: Maybe<Contentstack_Pages_Modular_Blocksarticle_Cards_GroupFilterListInput>;
};

export type Contentstack_Pages_Modular_Blockscarousel = {
  title?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Maybe<Contentstack_Pages_Modular_Blockscarousel_Group>>>;
};

export type Contentstack_Pages_Modular_Blockscarousel_Group = {
  reference?: Maybe<Array<Maybe<Contentstack_Content_SpotsContentstack_Frequently_Asked_QuestionsContentstack_IngredientsContentstack_PagesContentstack_Products_Union>>>;
};

export type Contentstack_Pages_Modular_BlockscarouselFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Pages_Modular_Blockscollage = {
  title: Scalars['String'];
  image?: Maybe<Contentstack_Assets>;
  paragraph: Scalars['String'];
  link?: Maybe<Linktype>;
  colour: Scalars['String'];
};

export type Contentstack_Pages_Modular_BlockscollageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<Contentstack_AssetsFilterInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<LinktypeFilterInput>;
  colour?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Pages_Modular_BlocksFilterInput = {
  article_card?: Maybe<Contentstack_Pages_Modular_Blocksarticle_CardFilterInput>;
  article_cards?: Maybe<Contentstack_Pages_Modular_Blocksarticle_CardsFilterInput>;
  carousel?: Maybe<Contentstack_Pages_Modular_BlockscarouselFilterInput>;
  collage?: Maybe<Contentstack_Pages_Modular_BlockscollageFilterInput>;
  icon_list?: Maybe<Contentstack_Pages_Modular_Blocksicon_ListFilterInput>;
  image?: Maybe<Contentstack_Pages_Modular_BlocksimageFilterInput>;
  image_with_overlay?: Maybe<Contentstack_Pages_Modular_Blocksimage_With_OverlayFilterInput>;
  introduction?: Maybe<Contentstack_Pages_Modular_BlocksintroductionFilterInput>;
  paragraph?: Maybe<Contentstack_Pages_Modular_BlocksparagraphFilterInput>;
  quotation?: Maybe<Contentstack_Pages_Modular_BlocksquotationFilterInput>;
  video?: Maybe<Contentstack_Pages_Modular_BlocksvideoFilterInput>;
};

export type Contentstack_Pages_Modular_BlocksFilterListInput = {
  elemMatch?: Maybe<Contentstack_Pages_Modular_BlocksFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksicon_List = {
  group?: Maybe<Array<Maybe<Contentstack_Pages_Modular_Blocksicon_List_Group>>>;
};

export type Contentstack_Pages_Modular_Blocksicon_List_Group = {
  title: Scalars['String'];
  icon: Contentstack_Assets;
  colour?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Contentstack_Pages_Modular_Blocksicon_List_GroupFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<Contentstack_AssetsFilterInput>;
  colour?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Pages_Modular_Blocksicon_List_GroupFilterListInput = {
  elemMatch?: Maybe<Contentstack_Pages_Modular_Blocksicon_List_GroupFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksicon_ListFilterInput = {
  group?: Maybe<Contentstack_Pages_Modular_Blocksicon_List_GroupFilterListInput>;
};

export type Contentstack_Pages_Modular_Blocksimage = {
  image: Contentstack_Assets;
};

export type Contentstack_Pages_Modular_Blocksimage_With_Overlay = {
  title_primary?: Maybe<Scalars['String']>;
  title_secondary?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  image: Contentstack_Assets;
  link?: Maybe<Linktype>;
};

export type Contentstack_Pages_Modular_Blocksimage_With_OverlayFilterInput = {
  title_primary?: Maybe<StringQueryOperatorInput>;
  title_secondary?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<Contentstack_AssetsFilterInput>;
  link?: Maybe<LinktypeFilterInput>;
};

export type Contentstack_Pages_Modular_BlocksimageFilterInput = {
  image?: Maybe<Contentstack_AssetsFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksintroduction = {
  heading?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  link?: Maybe<Linktype>;
};

export type Contentstack_Pages_Modular_BlocksintroductionFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<LinktypeFilterInput>;
};

export type Contentstack_Pages_Modular_Blocksparagraph = {
  paragraph?: Maybe<Scalars['String']>;
};

export type Contentstack_Pages_Modular_BlocksparagraphFilterInput = {
  paragraph?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Pages_Modular_Blocksquotation = {
  quotation: Scalars['String'];
};

export type Contentstack_Pages_Modular_BlocksquotationFilterInput = {
  quotation?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_Pages_Modular_Blocksvideo = {
  video: Contentstack_Assets;
};

export type Contentstack_Pages_Modular_BlocksvideoFilterInput = {
  video?: Maybe<Contentstack_AssetsFilterInput>;
};

export type Contentstack_Pages_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Date']>;
  user?: Maybe<Scalars['String']>;
};


export type Contentstack_Pages_Publish_DetailsTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Pages_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<DateQueryOperatorInput>;
  user?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_PagesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_PagesEdge>;
  nodes: Array<Contentstack_Pages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_PagesGroupConnection>;
};


export type Contentstack_PagesConnectionDistinctArgs = {
  field: Contentstack_PagesFieldsEnum;
};


export type Contentstack_PagesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_PagesFieldsEnum;
};

export type Contentstack_PagesEdge = {
  next?: Maybe<Contentstack_Pages>;
  node: Contentstack_Pages;
  previous?: Maybe<Contentstack_Pages>;
};

export type Contentstack_PagesFieldsEnum = 
  | 'title'
  | 'url'
  | 'template'
  | 'modular_blocks'
  | 'modular_blocks___article_card___title'
  | 'modular_blocks___article_card___title_primary'
  | 'modular_blocks___article_card___title_secondary'
  | 'modular_blocks___article_card___paragraph'
  | 'modular_blocks___article_card___link___title'
  | 'modular_blocks___article_card___link___href'
  | 'modular_blocks___article_cards___group'
  | 'modular_blocks___article_cards___group___title'
  | 'modular_blocks___article_cards___group___title_primary'
  | 'modular_blocks___article_cards___group___title_secondary'
  | 'modular_blocks___article_cards___group___paragraph'
  | 'modular_blocks___carousel___title'
  | 'modular_blocks___carousel___group'
  | 'modular_blocks___collage___title'
  | 'modular_blocks___collage___image___url'
  | 'modular_blocks___collage___image___uid'
  | 'modular_blocks___collage___image___created_at'
  | 'modular_blocks___collage___image___updated_at'
  | 'modular_blocks___collage___image___created_by'
  | 'modular_blocks___collage___image___updated_by'
  | 'modular_blocks___collage___image___content_type'
  | 'modular_blocks___collage___image___file_size'
  | 'modular_blocks___collage___image___filename'
  | 'modular_blocks___collage___image___is_dir'
  | 'modular_blocks___collage___image____version'
  | 'modular_blocks___collage___image___title'
  | 'modular_blocks___collage___image___id'
  | 'modular_blocks___collage___image___children'
  | 'modular_blocks___collage___paragraph'
  | 'modular_blocks___collage___link___title'
  | 'modular_blocks___collage___link___href'
  | 'modular_blocks___collage___colour'
  | 'modular_blocks___icon_list___group'
  | 'modular_blocks___icon_list___group___title'
  | 'modular_blocks___icon_list___group___colour'
  | 'modular_blocks___icon_list___group___text'
  | 'modular_blocks___image___image___url'
  | 'modular_blocks___image___image___uid'
  | 'modular_blocks___image___image___created_at'
  | 'modular_blocks___image___image___updated_at'
  | 'modular_blocks___image___image___created_by'
  | 'modular_blocks___image___image___updated_by'
  | 'modular_blocks___image___image___content_type'
  | 'modular_blocks___image___image___file_size'
  | 'modular_blocks___image___image___filename'
  | 'modular_blocks___image___image___is_dir'
  | 'modular_blocks___image___image____version'
  | 'modular_blocks___image___image___title'
  | 'modular_blocks___image___image___id'
  | 'modular_blocks___image___image___children'
  | 'modular_blocks___image_with_overlay___title_primary'
  | 'modular_blocks___image_with_overlay___title_secondary'
  | 'modular_blocks___image_with_overlay___paragraph'
  | 'modular_blocks___image_with_overlay___image___url'
  | 'modular_blocks___image_with_overlay___image___uid'
  | 'modular_blocks___image_with_overlay___image___created_at'
  | 'modular_blocks___image_with_overlay___image___updated_at'
  | 'modular_blocks___image_with_overlay___image___created_by'
  | 'modular_blocks___image_with_overlay___image___updated_by'
  | 'modular_blocks___image_with_overlay___image___content_type'
  | 'modular_blocks___image_with_overlay___image___file_size'
  | 'modular_blocks___image_with_overlay___image___filename'
  | 'modular_blocks___image_with_overlay___image___is_dir'
  | 'modular_blocks___image_with_overlay___image____version'
  | 'modular_blocks___image_with_overlay___image___title'
  | 'modular_blocks___image_with_overlay___image___id'
  | 'modular_blocks___image_with_overlay___image___children'
  | 'modular_blocks___image_with_overlay___link___title'
  | 'modular_blocks___image_with_overlay___link___href'
  | 'modular_blocks___introduction___heading'
  | 'modular_blocks___introduction___paragraph'
  | 'modular_blocks___introduction___link___title'
  | 'modular_blocks___introduction___link___href'
  | 'modular_blocks___paragraph___paragraph'
  | 'modular_blocks___quotation___quotation'
  | 'modular_blocks___video___video___url'
  | 'modular_blocks___video___video___uid'
  | 'modular_blocks___video___video___created_at'
  | 'modular_blocks___video___video___updated_at'
  | 'modular_blocks___video___video___created_by'
  | 'modular_blocks___video___video___updated_by'
  | 'modular_blocks___video___video___content_type'
  | 'modular_blocks___video___video___file_size'
  | 'modular_blocks___video___video___filename'
  | 'modular_blocks___video___video___is_dir'
  | 'modular_blocks___video___video____version'
  | 'modular_blocks___video___video___title'
  | 'modular_blocks___video___video___id'
  | 'modular_blocks___video___video___children'
  | 'reference'
  | 'reference___title'
  | 'reference___sub_menus'
  | 'reference___sub_menus___title'
  | 'reference___sub_menus___sub_menus'
  | 'reference___sub_menus___sub_menus___title'
  | 'reference___sub_menus___sub_menus___sub_menus'
  | 'reference___sub_menus___sub_menus___links'
  | 'reference___sub_menus___sub_menus___slot'
  | 'reference___sub_menus___sub_menus___uid'
  | 'reference___sub_menus___sub_menus___locale'
  | 'reference___sub_menus___sub_menus___updated_at'
  | 'reference___sub_menus___sub_menus____version'
  | 'reference___sub_menus___sub_menus___created_at'
  | 'reference___sub_menus___sub_menus___created_by'
  | 'reference___sub_menus___sub_menus___updated_by'
  | 'reference___sub_menus___sub_menus___id'
  | 'reference___sub_menus___sub_menus___children'
  | 'reference___sub_menus___links'
  | 'reference___sub_menus___links___text'
  | 'reference___sub_menus___slot'
  | 'reference___sub_menus___uid'
  | 'reference___sub_menus___locale'
  | 'reference___sub_menus___publish_details___locale'
  | 'reference___sub_menus___publish_details___environment'
  | 'reference___sub_menus___publish_details___time'
  | 'reference___sub_menus___publish_details___user'
  | 'reference___sub_menus___updated_at'
  | 'reference___sub_menus____version'
  | 'reference___sub_menus___created_at'
  | 'reference___sub_menus___created_by'
  | 'reference___sub_menus___updated_by'
  | 'reference___sub_menus___id'
  | 'reference___sub_menus___parent___id'
  | 'reference___sub_menus___parent___children'
  | 'reference___sub_menus___children'
  | 'reference___sub_menus___children___id'
  | 'reference___sub_menus___children___children'
  | 'reference___sub_menus___internal___content'
  | 'reference___sub_menus___internal___contentDigest'
  | 'reference___sub_menus___internal___description'
  | 'reference___sub_menus___internal___fieldOwners'
  | 'reference___sub_menus___internal___ignoreType'
  | 'reference___sub_menus___internal___mediaType'
  | 'reference___sub_menus___internal___owner'
  | 'reference___sub_menus___internal___type'
  | 'reference___links'
  | 'reference___links___url___title'
  | 'reference___links___url___href'
  | 'reference___links___text'
  | 'reference___links___image___url'
  | 'reference___links___image___uid'
  | 'reference___links___image___created_at'
  | 'reference___links___image___updated_at'
  | 'reference___links___image___created_by'
  | 'reference___links___image___updated_by'
  | 'reference___links___image___content_type'
  | 'reference___links___image___file_size'
  | 'reference___links___image___filename'
  | 'reference___links___image___is_dir'
  | 'reference___links___image____version'
  | 'reference___links___image___title'
  | 'reference___links___image___id'
  | 'reference___links___image___children'
  | 'reference___slot'
  | 'reference___uid'
  | 'reference___locale'
  | 'reference___publish_details___locale'
  | 'reference___publish_details___environment'
  | 'reference___publish_details___time'
  | 'reference___publish_details___user'
  | 'reference___updated_at'
  | 'reference____version'
  | 'reference___created_at'
  | 'reference___created_by'
  | 'reference___updated_by'
  | 'reference___id'
  | 'reference___parent___id'
  | 'reference___parent___parent___id'
  | 'reference___parent___parent___children'
  | 'reference___parent___children'
  | 'reference___parent___children___id'
  | 'reference___parent___children___children'
  | 'reference___parent___internal___content'
  | 'reference___parent___internal___contentDigest'
  | 'reference___parent___internal___description'
  | 'reference___parent___internal___fieldOwners'
  | 'reference___parent___internal___ignoreType'
  | 'reference___parent___internal___mediaType'
  | 'reference___parent___internal___owner'
  | 'reference___parent___internal___type'
  | 'reference___children'
  | 'reference___children___id'
  | 'reference___children___parent___id'
  | 'reference___children___parent___children'
  | 'reference___children___children'
  | 'reference___children___children___id'
  | 'reference___children___children___children'
  | 'reference___children___internal___content'
  | 'reference___children___internal___contentDigest'
  | 'reference___children___internal___description'
  | 'reference___children___internal___fieldOwners'
  | 'reference___children___internal___ignoreType'
  | 'reference___children___internal___mediaType'
  | 'reference___children___internal___owner'
  | 'reference___children___internal___type'
  | 'reference___internal___content'
  | 'reference___internal___contentDigest'
  | 'reference___internal___description'
  | 'reference___internal___fieldOwners'
  | 'reference___internal___ignoreType'
  | 'reference___internal___mediaType'
  | 'reference___internal___owner'
  | 'reference___internal___type'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'publish_details___environment'
  | 'publish_details___time'
  | 'publish_details___user'
  | 'updated_at'
  | '_version'
  | 'created_at'
  | 'created_by'
  | 'updated_by'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_PagesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  modular_blocks?: Maybe<Contentstack_Pages_Modular_BlocksFilterListInput>;
  reference?: Maybe<Contentstack_MenusFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Pages_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_PagesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_PagesEdge>;
  nodes: Array<Contentstack_Pages>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_PagesSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_PagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Contentstack_Products = Node & {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['Int']>;
  rich_text_editor?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<Contentstack_Products_Publish_Details>;
  updated_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Contentstack_Products_Publish_Details = {
  locale?: Maybe<Scalars['String']>;
};

export type Contentstack_Products_Publish_DetailsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
};

export type Contentstack_ProductsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_ProductsEdge>;
  nodes: Array<Contentstack_Products>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contentstack_ProductsGroupConnection>;
};


export type Contentstack_ProductsConnectionDistinctArgs = {
  field: Contentstack_ProductsFieldsEnum;
};


export type Contentstack_ProductsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contentstack_ProductsFieldsEnum;
};

export type Contentstack_ProductsEdge = {
  next?: Maybe<Contentstack_Products>;
  node: Contentstack_Products;
  previous?: Maybe<Contentstack_Products>;
};

export type Contentstack_ProductsFieldsEnum = 
  | 'title'
  | 'url'
  | 'product_id'
  | 'rich_text_editor'
  | 'uid'
  | 'locale'
  | 'publish_details___locale'
  | 'updated_at'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Contentstack_ProductsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  product_id?: Maybe<IntQueryOperatorInput>;
  rich_text_editor?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Products_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type Contentstack_ProductsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contentstack_ProductsEdge>;
  nodes: Array<Contentstack_Products>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contentstack_ProductsSortInput = {
  fields?: Maybe<Array<Maybe<Contentstack_ProductsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentstackContentTypes = Node & {
  title: Scalars['String'];
  uid: Scalars['String'];
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  schema: Scalars['JSON'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentstackContentTypesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentstackContentTypesEdge>;
  nodes: Array<ContentstackContentTypes>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentstackContentTypesGroupConnection>;
};


export type ContentstackContentTypesConnectionDistinctArgs = {
  field: ContentstackContentTypesFieldsEnum;
};


export type ContentstackContentTypesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentstackContentTypesFieldsEnum;
};

export type ContentstackContentTypesEdge = {
  next?: Maybe<ContentstackContentTypes>;
  node: ContentstackContentTypes;
  previous?: Maybe<ContentstackContentTypes>;
};

export type ContentstackContentTypesFieldsEnum = 
  | 'title'
  | 'uid'
  | 'created_at'
  | 'updated_at'
  | 'schema'
  | 'description'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentstackContentTypesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  schema?: Maybe<JsonQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentstackContentTypesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentstackContentTypesEdge>;
  nodes: Array<ContentstackContentTypes>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentstackContentTypesSortInput = {
  fields?: Maybe<Array<Maybe<ContentstackContentTypesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'updated_at'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Linktype = {
  title?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type LinktypeFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentstackProducts?: Maybe<Contentstack_Products>;
  allContentstackProducts: Contentstack_ProductsConnection;
  contentstackContentSpots?: Maybe<Contentstack_Content_Spots>;
  allContentstackContentSpots: Contentstack_Content_SpotsConnection;
  contentstackFrequentlyAskedQuestions?: Maybe<Contentstack_Frequently_Asked_Questions>;
  allContentstackFrequentlyAskedQuestions: Contentstack_Frequently_Asked_QuestionsConnection;
  contentstackIngredients?: Maybe<Contentstack_Ingredients>;
  allContentstackIngredients: Contentstack_IngredientsConnection;
  contentstackPages?: Maybe<Contentstack_Pages>;
  allContentstackPages: Contentstack_PagesConnection;
  contentstackAssets?: Maybe<Contentstack_Assets>;
  allContentstackAssets: Contentstack_AssetsConnection;
  contentstackMenus?: Maybe<Contentstack_Menus>;
  allContentstackMenus: Contentstack_MenusConnection;
  contentstackCategories?: Maybe<Contentstack_Categories>;
  allContentstackCategories: Contentstack_CategoriesConnection;
  contentstackBlogArticles?: Maybe<Contentstack_Blog_Articles>;
  allContentstackBlogArticles: Contentstack_Blog_ArticlesConnection;
  contentstackBanners?: Maybe<Contentstack_Banners>;
  allContentstackBanners: Contentstack_BannersConnection;
  contentstackContentTypes?: Maybe<ContentstackContentTypes>;
  allContentstackContentTypes: ContentstackContentTypesConnection;
  siteSearchIndex?: Maybe<SiteSearchIndex>;
  allSiteSearchIndex: SiteSearchIndexConnection;
  bigCommerceProducts?: Maybe<BigCommerceProducts>;
  allBigCommerceProducts: BigCommerceProductsConnection;
  bigCommerceCategories?: Maybe<BigCommerceCategories>;
  allBigCommerceCategories: BigCommerceCategoriesConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackProductsArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  product_id?: Maybe<IntQueryOperatorInput>;
  rich_text_editor?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Products_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackProductsArgs = {
  filter?: Maybe<Contentstack_ProductsFilterInput>;
  sort?: Maybe<Contentstack_ProductsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackContentSpotsArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Content_Spots_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackContentSpotsArgs = {
  filter?: Maybe<Contentstack_Content_SpotsFilterInput>;
  sort?: Maybe<Contentstack_Content_SpotsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackFrequentlyAskedQuestionsArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  answer?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Frequently_Asked_Questions_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackFrequentlyAskedQuestionsArgs = {
  filter?: Maybe<Contentstack_Frequently_Asked_QuestionsFilterInput>;
  sort?: Maybe<Contentstack_Frequently_Asked_QuestionsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackIngredientsArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Ingredients_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackIngredientsArgs = {
  filter?: Maybe<Contentstack_IngredientsFilterInput>;
  sort?: Maybe<Contentstack_IngredientsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackPagesArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  modular_blocks?: Maybe<Contentstack_Pages_Modular_BlocksFilterListInput>;
  reference?: Maybe<Contentstack_MenusFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Pages_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackPagesArgs = {
  filter?: Maybe<Contentstack_PagesFilterInput>;
  sort?: Maybe<Contentstack_PagesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackAssetsArgs = {
  url?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  content_type?: Maybe<StringQueryOperatorInput>;
  file_size?: Maybe<DateQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  is_dir?: Maybe<BooleanQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_AssetsPublish_DetailsFilterInput>;
  dimension?: Maybe<Contentstack_AssetsDimensionFilterInput>;
  localAsset?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackAssetsArgs = {
  filter?: Maybe<Contentstack_AssetsFilterInput>;
  sort?: Maybe<Contentstack_AssetsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackMenusArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  sub_menus?: Maybe<Contentstack_MenusFilterListInput>;
  links?: Maybe<Contentstack_Menus_LinksFilterListInput>;
  slot?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Menus_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  _version?: Maybe<IntQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackMenusArgs = {
  filter?: Maybe<Contentstack_MenusFilterInput>;
  sort?: Maybe<Contentstack_MenusSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackCategoriesArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  parent_categories?: Maybe<Contentstack_CategoriesFilterListInput>;
  menus?: Maybe<Contentstack_MenusFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Categories_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackCategoriesArgs = {
  filter?: Maybe<Contentstack_CategoriesFilterInput>;
  sort?: Maybe<Contentstack_CategoriesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackBlogArticlesArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  rich_text_editor?: Maybe<StringQueryOperatorInput>;
  modular_blocks?: Maybe<Contentstack_Blog_Articles_Modular_BlocksFilterListInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Blog_Articles_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackBlogArticlesArgs = {
  filter?: Maybe<Contentstack_Blog_ArticlesFilterInput>;
  sort?: Maybe<Contentstack_Blog_ArticlesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackBannersArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<LinktypeFilterInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<Contentstack_Banners_Publish_DetailsFilterInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackBannersArgs = {
  filter?: Maybe<Contentstack_BannersFilterInput>;
  sort?: Maybe<Contentstack_BannersSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentstackContentTypesArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  schema?: Maybe<JsonQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentstackContentTypesArgs = {
  filter?: Maybe<ContentstackContentTypesFilterInput>;
  sort?: Maybe<ContentstackContentTypesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteSearchIndexArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<SiteSearchIndex_IndexQueryOperatorInput>;
};


export type QueryAllSiteSearchIndexArgs = {
  filter?: Maybe<SiteSearchIndexFilterInput>;
  sort?: Maybe<SiteSearchIndexSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBigCommerceProductsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  cost_price?: Maybe<IntQueryOperatorInput>;
  retail_price?: Maybe<IntQueryOperatorInput>;
  sale_price?: Maybe<IntQueryOperatorInput>;
  map_price?: Maybe<IntQueryOperatorInput>;
  tax_class_id?: Maybe<IntQueryOperatorInput>;
  product_tax_code?: Maybe<StringQueryOperatorInput>;
  calculated_price?: Maybe<FloatQueryOperatorInput>;
  categories?: Maybe<IntQueryOperatorInput>;
  brand_id?: Maybe<IntQueryOperatorInput>;
  option_set_id?: Maybe<IntQueryOperatorInput>;
  option_set_display?: Maybe<StringQueryOperatorInput>;
  inventory_level?: Maybe<IntQueryOperatorInput>;
  inventory_warning_level?: Maybe<IntQueryOperatorInput>;
  inventory_tracking?: Maybe<StringQueryOperatorInput>;
  reviews_rating_sum?: Maybe<IntQueryOperatorInput>;
  reviews_count?: Maybe<IntQueryOperatorInput>;
  total_sold?: Maybe<IntQueryOperatorInput>;
  fixed_cost_shipping_price?: Maybe<IntQueryOperatorInput>;
  is_free_shipping?: Maybe<BooleanQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  is_featured?: Maybe<BooleanQueryOperatorInput>;
  related_products?: Maybe<IntQueryOperatorInput>;
  warranty?: Maybe<StringQueryOperatorInput>;
  bin_picking_number?: Maybe<StringQueryOperatorInput>;
  layout_file?: Maybe<StringQueryOperatorInput>;
  upc?: Maybe<StringQueryOperatorInput>;
  mpn?: Maybe<StringQueryOperatorInput>;
  gtin?: Maybe<StringQueryOperatorInput>;
  search_keywords?: Maybe<StringQueryOperatorInput>;
  availability?: Maybe<StringQueryOperatorInput>;
  availability_description?: Maybe<StringQueryOperatorInput>;
  gift_wrapping_options_type?: Maybe<StringQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  condition?: Maybe<StringQueryOperatorInput>;
  is_condition_shown?: Maybe<BooleanQueryOperatorInput>;
  order_quantity_minimum?: Maybe<IntQueryOperatorInput>;
  order_quantity_maximum?: Maybe<IntQueryOperatorInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  date_created?: Maybe<DateQueryOperatorInput>;
  date_modified?: Maybe<DateQueryOperatorInput>;
  view_count?: Maybe<IntQueryOperatorInput>;
  preorder_message?: Maybe<StringQueryOperatorInput>;
  is_preorder_only?: Maybe<BooleanQueryOperatorInput>;
  is_price_hidden?: Maybe<BooleanQueryOperatorInput>;
  price_hidden_label?: Maybe<StringQueryOperatorInput>;
  custom_url?: Maybe<BigCommerceProductsCustom_UrlFilterInput>;
  base_variant_id?: Maybe<IntQueryOperatorInput>;
  open_graph_type?: Maybe<StringQueryOperatorInput>;
  open_graph_title?: Maybe<StringQueryOperatorInput>;
  open_graph_description?: Maybe<StringQueryOperatorInput>;
  open_graph_use_meta_description?: Maybe<BooleanQueryOperatorInput>;
  open_graph_use_product_name?: Maybe<BooleanQueryOperatorInput>;
  open_graph_use_image?: Maybe<BooleanQueryOperatorInput>;
  bigcommerce_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllBigCommerceProductsArgs = {
  filter?: Maybe<BigCommerceProductsFilterInput>;
  sort?: Maybe<BigCommerceProductsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBigCommerceCategoriesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  parent_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  views?: Maybe<IntQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
  meta_keywords?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  layout_file?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  search_keywords?: Maybe<StringQueryOperatorInput>;
  default_product_sort?: Maybe<StringQueryOperatorInput>;
  custom_url?: Maybe<BigCommerceCategoriesCustom_UrlFilterInput>;
  bigcommerce_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllBigCommerceCategoriesArgs = {
  filter?: Maybe<BigCommerceCategoriesFilterInput>;
  sort?: Maybe<BigCommerceCategoriesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  page?: Maybe<SitePageContextPage>;
  breadcrumb?: Maybe<SitePageContextBreadcrumb>;
  category?: Maybe<SitePageContextCategory>;
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<SitePageContextProduct>;
};

export type SitePageContextBreadcrumb = {
  location?: Maybe<Scalars['String']>;
  crumbs?: Maybe<Array<Maybe<SitePageContextBreadcrumbCrumbs>>>;
};

export type SitePageContextBreadcrumbCrumbs = {
  pathname?: Maybe<Scalars['String']>;
  crumbLabel?: Maybe<Scalars['String']>;
};

export type SitePageContextBreadcrumbCrumbsFilterInput = {
  pathname?: Maybe<StringQueryOperatorInput>;
  crumbLabel?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBreadcrumbCrumbsFilterListInput = {
  elemMatch?: Maybe<SitePageContextBreadcrumbCrumbsFilterInput>;
};

export type SitePageContextBreadcrumbFilterInput = {
  location?: Maybe<StringQueryOperatorInput>;
  crumbs?: Maybe<SitePageContextBreadcrumbCrumbsFilterListInput>;
};

export type SitePageContextCategory = {
  bigcommerce_id?: Maybe<Scalars['Int']>;
  custom_url?: Maybe<SitePageContextCategoryCustom_Url>;
  default_product_sort?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  layout_file?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  search_keywords?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

export type SitePageContextCategoryCustom_Url = {
  url?: Maybe<Scalars['String']>;
};

export type SitePageContextCategoryCustom_UrlFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextCategoryFilterInput = {
  bigcommerce_id?: Maybe<IntQueryOperatorInput>;
  custom_url?: Maybe<SitePageContextCategoryCustom_UrlFilterInput>;
  default_product_sort?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  layout_file?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  meta_keywords?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
  parent_id?: Maybe<IntQueryOperatorInput>;
  search_keywords?: Maybe<StringQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  views?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  page?: Maybe<SitePageContextPageFilterInput>;
  breadcrumb?: Maybe<SitePageContextBreadcrumbFilterInput>;
  category?: Maybe<SitePageContextCategoryFilterInput>;
  id?: Maybe<IntQueryOperatorInput>;
  product?: Maybe<SitePageContextProductFilterInput>;
};

export type SitePageContextPage = {
  template?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SitePageContextPagePublish_Details>;
  modular_blocks?: Maybe<Array<Maybe<SitePageContextPageModular_Blocks>>>;
};

export type SitePageContextPageFilterInput = {
  template?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  publish_details?: Maybe<SitePageContextPagePublish_DetailsFilterInput>;
  modular_blocks?: Maybe<SitePageContextPageModular_BlocksFilterListInput>;
};

export type SitePageContextPageModular_Blocks = {
  article_cards?: Maybe<SitePageContextPageModular_BlocksArticle_Cards>;
  image_with_overlay?: Maybe<SitePageContextPageModular_BlocksImage_With_Overlay>;
};

export type SitePageContextPageModular_BlocksArticle_Cards = {
  group?: Maybe<Array<Maybe<SitePageContextPageModular_BlocksArticle_CardsGroup>>>;
};

export type SitePageContextPageModular_BlocksArticle_CardsFilterInput = {
  group?: Maybe<SitePageContextPageModular_BlocksArticle_CardsGroupFilterListInput>;
};

export type SitePageContextPageModular_BlocksArticle_CardsGroup = {
  paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_primary?: Maybe<Scalars['String']>;
  title_secondary?: Maybe<Scalars['String']>;
};

export type SitePageContextPageModular_BlocksArticle_CardsGroupFilterInput = {
  paragraph?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_primary?: Maybe<StringQueryOperatorInput>;
  title_secondary?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPageModular_BlocksArticle_CardsGroupFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageModular_BlocksArticle_CardsGroupFilterInput>;
};

export type SitePageContextPageModular_BlocksFilterInput = {
  article_cards?: Maybe<SitePageContextPageModular_BlocksArticle_CardsFilterInput>;
  image_with_overlay?: Maybe<SitePageContextPageModular_BlocksImage_With_OverlayFilterInput>;
};

export type SitePageContextPageModular_BlocksFilterListInput = {
  elemMatch?: Maybe<SitePageContextPageModular_BlocksFilterInput>;
};

export type SitePageContextPageModular_BlocksImage_With_Overlay = {
  title_secondary?: Maybe<Scalars['String']>;
  title_primary?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  link?: Maybe<SitePageContextPageModular_BlocksImage_With_OverlayLink>;
};

export type SitePageContextPageModular_BlocksImage_With_OverlayFilterInput = {
  title_secondary?: Maybe<StringQueryOperatorInput>;
  title_primary?: Maybe<StringQueryOperatorInput>;
  paragraph?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<SitePageContextPageModular_BlocksImage_With_OverlayLinkFilterInput>;
};

export type SitePageContextPageModular_BlocksImage_With_OverlayLink = {
  title?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type SitePageContextPageModular_BlocksImage_With_OverlayLinkFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagePublish_Details = {
  time?: Maybe<Scalars['Date']>;
  user?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
};

export type SitePageContextPagePublish_DetailsFilterInput = {
  time?: Maybe<DateQueryOperatorInput>;
  user?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextProduct = {
  availability?: Maybe<Scalars['String']>;
  calculated_price?: Maybe<Scalars['Float']>;
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  custom_url?: Maybe<SitePageContextProductCustom_Url>;
  depth?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fixed_cost_shipping_price?: Maybe<Scalars['Int']>;
  gtin?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  inventory_level?: Maybe<Scalars['Int']>;
  inventory_warning_level?: Maybe<Scalars['Int']>;
  is_featured?: Maybe<Scalars['Boolean']>;
  is_free_shipping?: Maybe<Scalars['Boolean']>;
  is_preorder_only?: Maybe<Scalars['Boolean']>;
  is_price_hidden?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  mpn?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  preorder_message?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  price_hidden_label?: Maybe<Scalars['String']>;
  sale_price?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  upc?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SitePageContextProductCustom_Url = {
  url?: Maybe<Scalars['String']>;
};

export type SitePageContextProductCustom_UrlFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextProductFilterInput = {
  availability?: Maybe<StringQueryOperatorInput>;
  calculated_price?: Maybe<FloatQueryOperatorInput>;
  categories?: Maybe<IntQueryOperatorInput>;
  custom_url?: Maybe<SitePageContextProductCustom_UrlFilterInput>;
  depth?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fixed_cost_shipping_price?: Maybe<IntQueryOperatorInput>;
  gtin?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  inventory_level?: Maybe<IntQueryOperatorInput>;
  inventory_warning_level?: Maybe<IntQueryOperatorInput>;
  is_featured?: Maybe<BooleanQueryOperatorInput>;
  is_free_shipping?: Maybe<BooleanQueryOperatorInput>;
  is_preorder_only?: Maybe<BooleanQueryOperatorInput>;
  is_price_hidden?: Maybe<BooleanQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  mpn?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  preorder_message?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  price_hidden_label?: Maybe<StringQueryOperatorInput>;
  sale_price?: Maybe<IntQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  upc?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___page___template'
  | 'context___page___title'
  | 'context___page___url'
  | 'context___page___locale'
  | 'context___page___publish_details___time'
  | 'context___page___publish_details___user'
  | 'context___page___publish_details___environment'
  | 'context___page___modular_blocks'
  | 'context___breadcrumb___location'
  | 'context___breadcrumb___crumbs'
  | 'context___breadcrumb___crumbs___pathname'
  | 'context___breadcrumb___crumbs___crumbLabel'
  | 'context___category___bigcommerce_id'
  | 'context___category___custom_url___url'
  | 'context___category___default_product_sort'
  | 'context___category___description'
  | 'context___category___id'
  | 'context___category___image_url'
  | 'context___category___is_visible'
  | 'context___category___layout_file'
  | 'context___category___meta_description'
  | 'context___category___meta_keywords'
  | 'context___category___name'
  | 'context___category___page_title'
  | 'context___category___parent_id'
  | 'context___category___search_keywords'
  | 'context___category___sort_order'
  | 'context___category___views'
  | 'context___id'
  | 'context___product___availability'
  | 'context___product___calculated_price'
  | 'context___product___categories'
  | 'context___product___custom_url___url'
  | 'context___product___depth'
  | 'context___product___description'
  | 'context___product___fixed_cost_shipping_price'
  | 'context___product___gtin'
  | 'context___product___height'
  | 'context___product___id'
  | 'context___product___inventory_level'
  | 'context___product___inventory_warning_level'
  | 'context___product___is_featured'
  | 'context___product___is_free_shipping'
  | 'context___product___is_preorder_only'
  | 'context___product___is_price_hidden'
  | 'context___product___is_visible'
  | 'context___product___mpn'
  | 'context___product___name'
  | 'context___product___preorder_message'
  | 'context___product___price'
  | 'context___product___price_hidden_label'
  | 'context___product___sale_price'
  | 'context___product___sku'
  | 'context___product___upc'
  | 'context___product___weight'
  | 'context___product___width'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___options___emitWarning'
  | 'pluginCreator___pluginOptions___options___failOnError'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___google___families'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___clientId'
  | 'pluginCreator___pluginOptions___secret'
  | 'pluginCreator___pluginOptions___storeHash'
  | 'pluginCreator___pluginOptions___logLevel'
  | 'pluginCreator___pluginOptions___apiVersion'
  | 'pluginCreator___pluginOptions___endpoints___BigCommerceProducts'
  | 'pluginCreator___pluginOptions___endpoints___BigCommerceCategories'
  | 'pluginCreator___pluginOptions___preview'
  | 'pluginCreator___pluginOptions___api_key'
  | 'pluginCreator___pluginOptions___delivery_token'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___cdn'
  | 'pluginCreator___pluginOptions___expediteBuild'
  | 'pluginCreator___pluginOptions___enableSchemaGeneration'
  | 'pluginCreator___pluginOptions___type_prefix'
  | 'pluginCreator___pluginOptions___downloadImages'
  | 'pluginCreator___pluginOptions___MAX_CONCURRENCY_LIMIT'
  | 'pluginCreator___pluginOptions___fields'
  | 'pluginCreator___pluginOptions___useAutoGen'
  | 'pluginCreator___pluginOptions___autoGenHomeLabel'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___trailingSlashes'
  | 'pluginCreator___pluginOptions___id'
  | 'pluginCreator___pluginOptions___includeInDevelopment'
  | 'pluginCreator___pluginOptions___defaultDataLayer___type'
  | 'pluginCreator___pluginOptions___gtmAuth'
  | 'pluginCreator___pluginOptions___gtmPreview'
  | 'pluginCreator___pluginOptions___dataLayerName'
  | 'pluginCreator___pluginOptions___routeChangeEventName'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___stages'
  | 'pluginOptions___options___emitWarning'
  | 'pluginOptions___options___failOnError'
  | 'pluginOptions___displayName'
  | 'pluginOptions___fileName'
  | 'pluginOptions___minify'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___google___families'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___clientId'
  | 'pluginOptions___secret'
  | 'pluginOptions___storeHash'
  | 'pluginOptions___logLevel'
  | 'pluginOptions___apiVersion'
  | 'pluginOptions___endpoints___BigCommerceProducts'
  | 'pluginOptions___endpoints___BigCommerceCategories'
  | 'pluginOptions___preview'
  | 'pluginOptions___api_key'
  | 'pluginOptions___delivery_token'
  | 'pluginOptions___environment'
  | 'pluginOptions___cdn'
  | 'pluginOptions___expediteBuild'
  | 'pluginOptions___enableSchemaGeneration'
  | 'pluginOptions___type_prefix'
  | 'pluginOptions___downloadImages'
  | 'pluginOptions___MAX_CONCURRENCY_LIMIT'
  | 'pluginOptions___fields'
  | 'pluginOptions___useAutoGen'
  | 'pluginOptions___autoGenHomeLabel'
  | 'pluginOptions___exclude'
  | 'pluginOptions___trailingSlashes'
  | 'pluginOptions___id'
  | 'pluginOptions___includeInDevelopment'
  | 'pluginOptions___defaultDataLayer___type'
  | 'pluginOptions___defaultDataLayer___value___platform'
  | 'pluginOptions___gtmAuth'
  | 'pluginOptions___gtmPreview'
  | 'pluginOptions___dataLayerName'
  | 'pluginOptions___routeChangeEventName'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  stages?: Maybe<Array<Maybe<Scalars['String']>>>;
  options?: Maybe<SitePluginPluginOptionsOptions>;
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  google?: Maybe<SitePluginPluginOptionsGoogle>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  accessToken?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  storeHash?: Maybe<Scalars['String']>;
  logLevel?: Maybe<Scalars['String']>;
  apiVersion?: Maybe<Scalars['String']>;
  endpoints?: Maybe<SitePluginPluginOptionsEndpoints>;
  preview?: Maybe<Scalars['Boolean']>;
  api_key?: Maybe<Scalars['String']>;
  delivery_token?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  cdn?: Maybe<Scalars['String']>;
  expediteBuild?: Maybe<Scalars['Boolean']>;
  enableSchemaGeneration?: Maybe<Scalars['Boolean']>;
  type_prefix?: Maybe<Scalars['String']>;
  downloadImages?: Maybe<Scalars['Boolean']>;
  MAX_CONCURRENCY_LIMIT?: Maybe<Scalars['Int']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  useAutoGen?: Maybe<Scalars['Boolean']>;
  autoGenHomeLabel?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailingSlashes?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  includeInDevelopment?: Maybe<Scalars['Boolean']>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  gtmAuth?: Maybe<Scalars['String']>;
  gtmPreview?: Maybe<Scalars['String']>;
  dataLayerName?: Maybe<Scalars['String']>;
  routeChangeEventName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultDataLayer = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValue>;
};

export type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValueFilterInput>;
};

export type SitePluginPluginOptionsDefaultDataLayerValue = {
  platform?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultDataLayerValueFilterInput = {
  platform?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEndpoints = {
  BigCommerceProducts?: Maybe<Scalars['String']>;
  BigCommerceCategories?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsEndpointsFilterInput = {
  BigCommerceProducts?: Maybe<StringQueryOperatorInput>;
  BigCommerceCategories?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  stages?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  clientId?: Maybe<StringQueryOperatorInput>;
  secret?: Maybe<StringQueryOperatorInput>;
  storeHash?: Maybe<StringQueryOperatorInput>;
  logLevel?: Maybe<StringQueryOperatorInput>;
  apiVersion?: Maybe<StringQueryOperatorInput>;
  endpoints?: Maybe<SitePluginPluginOptionsEndpointsFilterInput>;
  preview?: Maybe<BooleanQueryOperatorInput>;
  api_key?: Maybe<StringQueryOperatorInput>;
  delivery_token?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  cdn?: Maybe<StringQueryOperatorInput>;
  expediteBuild?: Maybe<BooleanQueryOperatorInput>;
  enableSchemaGeneration?: Maybe<BooleanQueryOperatorInput>;
  type_prefix?: Maybe<StringQueryOperatorInput>;
  downloadImages?: Maybe<BooleanQueryOperatorInput>;
  MAX_CONCURRENCY_LIMIT?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StringQueryOperatorInput>;
  useAutoGen?: Maybe<BooleanQueryOperatorInput>;
  autoGenHomeLabel?: Maybe<StringQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  trailingSlashes?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  gtmAuth?: Maybe<StringQueryOperatorInput>;
  gtmPreview?: Maybe<StringQueryOperatorInput>;
  dataLayerName?: Maybe<StringQueryOperatorInput>;
  routeChangeEventName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
  emitWarning?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSearchIndex = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['SiteSearchIndex_Index']>;
};


export type SiteSearchIndex_IndexQueryOperatorInput = {
  eq?: Maybe<Scalars['SiteSearchIndex_Index']>;
  ne?: Maybe<Scalars['SiteSearchIndex_Index']>;
  in?: Maybe<Array<Maybe<Scalars['SiteSearchIndex_Index']>>>;
  nin?: Maybe<Array<Maybe<Scalars['SiteSearchIndex_Index']>>>;
};

export type SiteSearchIndexConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteSearchIndexEdge>;
  nodes: Array<SiteSearchIndex>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteSearchIndexGroupConnection>;
};


export type SiteSearchIndexConnectionDistinctArgs = {
  field: SiteSearchIndexFieldsEnum;
};


export type SiteSearchIndexConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteSearchIndexFieldsEnum;
};

export type SiteSearchIndexEdge = {
  next?: Maybe<SiteSearchIndex>;
  node: SiteSearchIndex;
  previous?: Maybe<SiteSearchIndex>;
};

export type SiteSearchIndexFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'pages'
  | 'index';

export type SiteSearchIndexFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<SiteSearchIndex_IndexQueryOperatorInput>;
};

export type SiteSearchIndexGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteSearchIndexEdge>;
  nodes: Array<SiteSearchIndex>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteSearchIndexSortInput = {
  fields?: Maybe<Array<Maybe<SiteSearchIndexFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { allContentstackMenus: { edges: Array<{ node: Contentstack_MenusFragmentFragment }> } };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { allBigCommerceCategories: { edges: Array<{ node: (
        Pick<BigCommerceCategories, 'description' | 'id' | 'is_visible' | 'meta_description' | 'meta_keywords' | 'name' | 'page_title' | 'parent_id' | 'search_keywords'>
        & { custom_url?: Maybe<Pick<BigCommerceCategoriesCustom_Url, 'url'>> }
      ) }> }, siteSearchIndex?: Maybe<Pick<SiteSearchIndex, 'index'>> };

export type PlaceholderImageQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaceholderImageQuery = { placeholderImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type LayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type MenuNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuNavigationQuery = { allContentstackMenus: { edges: Array<{ node: Contentstack_MenusFragmentFragment }> } };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: Maybe<(
    Pick<Site, 'buildTime'>
    & { siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'author' | 'description' | 'title'>> }
  )> };

export type BigCommerceProductsFragmentFragment = (
  Pick<BigCommerceProducts, 'availability' | 'calculated_price' | 'categories' | 'depth' | 'description' | 'fixed_cost_shipping_price' | 'gtin' | 'height' | 'id' | 'inventory_level' | 'inventory_warning_level' | 'is_featured' | 'is_free_shipping' | 'is_preorder_only' | 'is_price_hidden' | 'is_visible' | 'mpn' | 'name' | 'order_quantity_maximum' | 'preorder_message' | 'price' | 'price_hidden_label' | 'sale_price' | 'sku' | 'upc' | 'weight' | 'width'>
  & { custom_url?: Maybe<Pick<BigCommerceProductsCustom_Url, 'url'>> }
);

export type Contentstack_MenusFragmentFragment = (
  Pick<Contentstack_Menus, 'id' | 'title' | 'slot'>
  & { links?: Maybe<Array<Maybe<(
    Pick<Contentstack_Menus_Links, 'text'>
    & { url: Pick<Linktype, 'href' | 'title'>, image?: Maybe<(
      Pick<Contentstack_Assets, 'id' | 'url'>
      & { children: Array<(
        Pick<ImageSharp, 'id'>
        & { fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'originalImg' | 'originalName' | 'sizes' | 'src' | 'srcSet' | 'presentationWidth' | 'presentationHeight' | 'tracedSVG' | 'srcWebp' | 'srcSetWebp'>>, children: Array<Pick<File, 'id'> | Pick<ImageSharp, 'id'> | Pick<Directory, 'id'> | Pick<Site, 'id'> | Pick<SitePage, 'id'> | Pick<SitePlugin, 'id'> | Pick<Contentstack_Products, 'id'> | Pick<Contentstack_Content_Spots, 'id'> | Pick<Contentstack_Frequently_Asked_Questions, 'id'> | Pick<Contentstack_Ingredients, 'id'> | Pick<Contentstack_Pages, 'id'> | Pick<Contentstack_Assets, 'id'> | Pick<Contentstack_Menus, 'id'> | Pick<Contentstack_Categories, 'id'> | Pick<Contentstack_Blog_Articles, 'id'> | Pick<Contentstack_Banners, 'id'> | Pick<ContentstackContentTypes, 'id'> | Pick<SiteSearchIndex, 'id'> | Pick<BigCommerceProducts, 'id'> | Pick<BigCommerceCategories, 'id'> | Pick<SiteBuildMetadata, 'id'>> }
      )> }
    )> }
  )>>> }
);

export type CategoryPageQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type CategoryPageQuery = { allBigCommerceProducts: { edges: Array<{ node: (
        Pick<BigCommerceProducts, 'availability' | 'calculated_price' | 'categories' | 'depth' | 'description' | 'fixed_cost_shipping_price' | 'gtin' | 'height' | 'id' | 'inventory_level' | 'inventory_warning_level' | 'is_featured' | 'is_free_shipping' | 'is_preorder_only' | 'is_price_hidden' | 'is_visible' | 'mpn' | 'name' | 'order_quantity_maximum' | 'order_quantity_minimum' | 'preorder_message' | 'price' | 'price_hidden_label' | 'sale_price' | 'sku' | 'upc' | 'weight' | 'width'>
        & { custom_url?: Maybe<Pick<BigCommerceProductsCustom_Url, 'url'>> }
      ) }> }, allContentstackProducts: { edges: Array<{ node: Pick<Contentstack_Products, 'id' | 'product_id' | 'rich_text_editor' | 'title' | 'url' | 'locale'> }> } };

export type ProductPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductPageQuery = { allBigCommerceCategories: { edges: Array<{ node: Pick<BigCommerceCategories, 'name' | 'id'> }> } };

export type ProductsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsPageQuery = { allBigCommerceCategories: { edges: Array<{ node: Pick<BigCommerceCategories, 'name' | 'id'> }> }, allBigCommerceProducts: { edges: Array<{ node: BigCommerceProductsFragmentFragment }> }, allContentstackProducts: { edges: Array<{ node: Pick<Contentstack_Products, 'id' | 'product_id' | 'rich_text_editor' | 'title' | 'url'> }> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

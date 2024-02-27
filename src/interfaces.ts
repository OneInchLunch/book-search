export interface Books {
  numFound:      number;
  start:         number;
  numFoundExact: boolean;
  docs:          Doc[];
  num_found:     number;
  q:             string;
  offset:        null;
}

export interface Doc {
  author_alternative_name?: string[];
  author_key:               string[];
  author_name:              string[];
  contributor?:             string[];
  cover_edition_key?:       string;
  cover_i?:                 number;
  ddc?:                     string[];
  ebook_access:             EbookAccess;
  ebook_count_i:            number;
  edition_count:            number;
  edition_key:              string[];
  first_publish_year:       number;
  first_sentence?:          string[];
  has_fulltext:             boolean;
  ia?:                      string[];
  ia_collection?:           string[];
  ia_collection_s?:         string;
  isbn?:                    string[];
  key:                      string;
  language?:                string[];
  last_modified_i:          number;
  lcc?:                     string[];
  lccn?:                    string[];
  lending_edition_s?:       string;
  lending_identifier_s?:    string;
  number_of_pages_median?:  number;
  oclc?:                    string[];
  printdisabled_s?:         string;
  public_scan_b:            boolean;
  publish_date:             string[];
  publish_place?:           string[];
  publish_year:             number[];
  publisher:                string[];
  seed:                     string[];
  title:                    string;
  title_sort:               string;
  title_suggest:            string;
  type:                     Type;
  id_amazon?:               string[];
  id_better_world_books?:   string[];
  id_wikidata?:             string[];
  id_goodreads?:            string[];
  id_dnb?:                  string[];
  id_standard_ebooks?:      string[];
  id_librarything?:         string[];
  id_overdrive?:            string[];
  id_google?:               string[];
  id_hathi_trust?:          string[];
  id_project_gutenberg?:    string[];
  id_alibris_id?:           string[];
  id_librivox?:             string[];
  id_isfdb?:                string[];
  subject?:                 string[];
  place?:                   string[];
  time?:                    string[];
  person?:                  string[];
  ia_loaded_id?:            string[];
  ia_box_id?:               string[];
  ratings_average?:         number;
  ratings_sortable?:        number;
  ratings_count?:           number;
  ratings_count_1?:         number;
  ratings_count_2?:         number;
  ratings_count_3?:         number;
  ratings_count_4?:         number;
  ratings_count_5?:         number;
  readinglog_count?:        number;
  want_to_read_count?:      number;
  currently_reading_count?: number;
  already_read_count?:      number;
  publisher_facet:          string[];
  person_key?:              string[];
  place_key?:               string[];
  time_facet?:              string[];
  person_facet?:            string[];
  subject_facet?:           string[];
  _version_:                number;
  place_facet?:             string[];
  lcc_sort?:                string;
  author_facet:             string[];
  subject_key?:             string[];
  time_key?:                string[];
  ddc_sort?:                string;
  id_amazon_ca_asin?:       string[];
  id_amazon_co_uk_asin?:    string[];
  id_amazon_de_asin?:       string[];
  id_amazon_it_asin?:       string[];
  subtitle?:                string;
}

export enum EbookAccess {
  Borrowable = "borrowable",
  NoEbook = "no_ebook",
  Printdisabled = "printdisabled",
  Public = "public",
}

export enum Type {
  Work = "work",
}
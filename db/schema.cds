namespace my.bookshop;

entity Books {
  key ID          : Integer;
      title       : String;
      stock       : Integer;
      author      : String;
      publishedAt : Date;
      genre       : String;
      price       : Decimal(9, 2);
}

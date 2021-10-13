select "a"."line1",
       "a"."district",
       "c"."name" as "city",
       "t"."name" as "country"
 from  "cities" as "c"
 join  "addresses" as "a" using ("cityId")
 join  "countries" as "t" using ("countryId");

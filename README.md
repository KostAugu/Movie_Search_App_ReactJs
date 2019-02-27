# Kayak UI Academy Užduotis.

Sukurkite paieškos _autocomplete_ komponentą, naudodami `ReactJS` biblioteką, kurio pagalba vartotojas galės pasirinkti kino filmą iš įvestos frazės atitikmenų. Paieškos komponentas turi bendrauti su filmų informacijos API.

## Reikalavimai
1. Dizainas turi būti kuo panašesnis į pateiktą žemiau.
2. Komponentas turi būti prisitaikančio dizaino, kad veiktų ant įvairaus dydžio įrenginių. (responsive)
3. Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API:
   `GET: https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=`**{paieškos_tekstas}**`&page=1&include_adult=false`
4. Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
5. Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 įrašai.
6. Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką.
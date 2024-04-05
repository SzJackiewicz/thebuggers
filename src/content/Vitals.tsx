import React from 'react'

export const VitalsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Metryka</th>
          <th>Wartość docelowa</th>
          <th>Przeciętny wynik</th>
          <th>Słaby wynik</th>
          <th>Co wpływa na pogorszenie metryki?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LCP</td>
          <td>do 2,5s</td>
          <td>od 2,5s do 4s</td>
          <td>powyżej 4s</td>
          <td>
            1. Grafiki (obrazy, wideo - nawet osadzone w sliderach czy kartach produktowych (jeżeli produkt wyświetla się na viewporcie -
            np. na listingu) - dotyczy to również grafik, które są ustawione jako background w CSS. 2. Tekst (a dokładniej blok tekstu,
            którego doładowanie zajmuje więcej czasu, niż innych elementów).
          </td>
        </tr>
        <tr>
          <td>CLS</td>
          <td>do 0,1</td>
          <td>od 0,1 do 0,25</td>
          <td>powyżej 0,25</td>
          <td>
            1. Fonty - zmiana fontu “w locie” podczas ładowania strony może powodować przesunięcia elementów na ekranie. 2. Różnego rodzaju
            bary (np. bar wyświetlający się na górze strony informujący usera o promocji) - zbyt późne ładowanie baru może spowodować
            przesunięcie wszystkich elementów znajdujących się pod nim. 3. Obrazy/elementy bez placeholderów mogą doładowywać się za późno,
            przez co elementy obok obrazów ulegają przesunięciu. 4. Reklamy - np. Google Adsense lub wewnętrzne softy reklamowe. 5.
            Doładowywanie elementów po załadowaniu strony (np. buttony).
          </td>
        </tr>
        <tr>
          <td>FID</td>
          <td>do 100ms</td>
          <td>od 100ms do 300 ms</td>
          <td>powyżej 300ms</td>
          <td>
            1. Long-taski - taski, które potrzebują więcej czasu na wykonanie i blokują główny wątek przeglądarki (np. skrypty JS). 2. Czas
            odpowiedzi serwera - to jak długo serwer będzie odpowiadał na żądania użytkownika również ma znaczenie w przypadku metryki FID.
            3. “Pozwalanie” użytkownikowi na reakcję z elementem, kiedy ten jeszcze nie jest gotowy (np. button lub link).
          </td>
        </tr>
        <tr>
          <td>INP</td>
          <td>do 200ms</td>
          <td>od 200ms do 500ms</td>
          <td>powyżej 500ms</td>
        </tr>
      </tbody>
    </table>
  )
}

import React from 'react';
import {Link} from 'react-router-dom';

function Adulto() {
    return (
        <>
        <h1 className="gilo"> DERECHOS DEL ADULTO MAYOR </h1>
        <div className="row-1">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
         <p className="ji"> En colombia hay 4.626.419 adultos mayores</p>
        
      </div>
    </div>
  </div>
  </div>
  <div className="row-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
           <p className="ji"> Que corresponde al 11% de la población</p>
        
      </div>
    </div>
  </div>
</div>
               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVEhUXGBUVFxcVFRcVFRcVFRUXFxcVFRUYHSggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx0rLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLTcrLS0rLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABHEAABAwIDBAcEBwYEBAcAAAABAAIRAyEEEjEFQVFhBiJxgZGhsRMywfBCUnKCstHhFCNig6LCBzNz8RWSk6MWJENjs8PS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACcRAAICAgMAAQQCAwEAAAAAAAABAhEDIQQSMUEFEyIyUWEUQnEz/9oADAMBAAIRAxEAPwBaArWhcaFY0L17dHgi/AjrLU4BZnCN6y0eCcs/mKzY+mukMwUFjHWKvdVS/GVbLI+22ze+4qM5tfesbjFrdqP1QvRro67F1jMim2MxjX+Ec01x6xBjK2YyjgKtd4pUmGo92gb6k/RaOJW/2H/hNTHXxdQ1CR/l0jkYDzqXLu6At7s/YlGg3LRphgOse8ftONymQHNIpXsf2bVIXYDB06LRTpU2saLANbFkUBvVjxCrYQuslQ0THYoB/aph/avPpzeVFk9SjE4SlVEPY13aAvl3Tb/DEuc6rhoBNyxxgE/wmIC+puaRZCGqYykyh7L5JWN+o/PWA2dVoVclVhY68A74MGOK+m9HNAnu3Nk0sQ2HNGYA5XRcHdfVZzY4dTcWOsQYKVKFvR3br6bzBmyODklwdWyYsqp2LE0JyZEcxKQY8J1iHJNjFrcVUzH5srQAWrrWqwNXQ1aFmR0KHsVVQWRRaqnsXJgTxgLlxuquqU4VQ1Tb0VWqY7wTk4o1LLPYSqmlCssrk49no+HmXUYPelm0qQykq99ZKNs4zqkKhixVOzRy5E4UYHpLUklY6tqtNtt8krNVdUHI9LnE/QkxqJaLIemiW6JCHT9K6oQb9UXWKCe665gH1poV1MKtgRLGr1kmeBSsnTsU4w1RKAiaVVV8kexe4+TpocGpaUrx+IspPr2SfHViUiGDZby8yloGrS9wa0ZiTAHEnQeK+l7KwDMPSbSaNBLjxcfePisf0GwQfXNQ39kMw+2bN8BJW3quvKpctqMuqNPg3OHZljV2dypaeatlUmzSUTrtFBsbgpEg6qBtoUtsfFaJtG5RDuCnTg71JzVCbOlEg82QdemPz/VGU6JCprs3LmyYoXYgDgJWe2/hQ0trAa2JJgd609ZgQlanmY5hvIOokTuR4pVLYnkQuNoS7Oxdk3p4iyxdGo9jiDaCneGxRIW6uMqs8y+dvqxtXroCqZUiTvUYTIw6lfJkc2QAU4U6VImwEoins953H09VLnFesiOOUvEBOaoPamNXAOG4+S5Swcm+kIVlj/Ib48n6hNWplCPELRvwnAeOiCxOD7kyGdeFfLwpVaFVOrCOo4pA1aRBuqk1wjMqQzTxOhrVxghI9o4qZXaxSnGJEuMkaGLmykxLtY6rO1dU/wBoJDV1WLyVUj1XE3CzrAiBoqaYRDBZVkNn6DV0vfqmWJCW1DdcwT7PRbvRDWqqmimMXqGzw2JHGsVjWKTWqwBC2PUSLm2SjFi6cOSnGC6KArMtGo6AUIpVX8XgdzW/qU+r3m/NBdFcLkwjDvdLz94mPKETVJ4X+bLB5Mu2RnrODDrhj/wk2N1+atBtdCNqEWRbHKqzQSJ2hRLZvuXSBqqg8TdBYxFzXDiphw1FkOH6yIVrBuUElzHLlUKDYCjnNwpsGgPFA7kC+OYhMqhlLMQ05uSByoNpNbMhtOkRWcSQcxJEbuUbkbgW2Q+2P87uE9tx8AjsC0AS6eQ48+xenhlSwKTPDZsDfLlGKC2sJsLphQwjRGYgnhNh4IFuMJs0EDk34yr6NGoSCD4ghUcnJctI1cPDUdy2NadTcBA/hARLGzz8kLRpOA6wlT/awZaNeO5U5yNCEAl7mNF0EILpAidFEhx/MH4Iprso90uG+w9VCkwpRRGphrXEoCthwRZEYjHHSHRzGneEDh8YM0O0PkUxZGhUsaaF2OwsfPok9WnBWwx1C3JZvEs1WrxM3ZGD9R43XaFNcJTjRZOK6VYwWV2Xhm8f0z+0dEhfqn20khqarznL/Y9zw/8AzJs1RLQhmIoKshs/QbEpXV1TXEJVV1XME+3Uwi6YQzETTK9PI8Vj8LQptCrCsCFlhUcqBJ8enFQpfUwVSpORpMdwXKSStipwlN9Yq2bfZ1T/AMtSvqxvoqy6/IHx4pDVxdSlg2AguqsLhkvOUk5bgbpCr6O9JaeI/dOBp1m6sdv5tO8ea8/lac3R6/jwlHFG1WjSH3uyF41DJBEDUGbqDn9xVNStAkgkAblXm6LkFZaa8EE6d9+5EkzrHzogcJVEybtGitdVF4PcgsYohIeTYcVbTrzMRZLKdczoR2q+iGgkgRe/MrrJcQ95E3VNWpu1Q5qOOgtx1UmzvUWDRMvGm9B1rnvCKbTlQxFOBuQs5nzXpXtT9nxtNrhLH0r8nB7r+iabNxYqXN+dkt/xP2cXNp1ZuC4fH0keCSdEtsvovbSeQ9rwHU3durDwI+CsxySaSvRTyYYdnJLbPqeDymLFP8IwRYpRs2taSE0bXR9qA+3/AEX1acDVL3MARbsR296X1KtyN+5B2sbGFIOpNnWD2KmtQO6R3qihXPejmEkXKYKlFiqphCdfUoWphAPkynr296CrUjNvAC/iuF0U4cyzKdQPkpLjGXKKr4h1N8tlwFjz4gKW0aII9oy7TryO8FWOJl6zKnMxKeN/0ZfFN1SfGJ5j+PakWOct6T0eXxKp0IdppFVF0+x4SWsLrz3K/Y9vw/0IMRYQg1RDHKsh00VYsJXV1TPEOSupqpYJ9saURRKCY5FU3L1EkeExzC2lWAqimmFDZ1V2jD32SZSS9LmOEpeKwN6D2jiqwqMw7HGm0C8CCXXmStGKbaPVsX7ySB3AapTj8P8AvmVtQczSbxOUxc8VmfUXKWNdfg9H9I46xTcp+taAnbRdQEvl9ImHCZcCbBw+IQO0sGMQW1KZFKqwENfoHNsQ141BF76hVY/EuJDQAdfe0HAq7oxg873MJccnXLibEk+6B4rFi6N2aTQx2V0jdPscUPZVGZYk++CAJ9TI3c1omVWOABMl3AzuS/a+x6eIZke24HVcPeb2cRyWMqftOBeAeuybHc4cj9F3IqxJKS0Vo/ib+mwtBA5x4rzxcQIOkjRKNj9ImVQL7xPEHg4bu3RaAVmEG4n0KV1Y6yNMEa79ERSHJcp1WkDysiWODtF3UjscpgafMqRJmI3qYot49yjVIHzddVA2Qvu5r1ZmaNwVVfFNa0vcQALkkxHasZtDpq8/5Iht5JHWHMHcd6lKwZeFvT+pQyNpvLA6ZlxBIt9Fokk7tF8/NVtCm5zGZ2zOaoA0Amxyt96O0ojHNLy6tLnu3ucZcRvkqey8GcTWpUYJYCKtThlboD2k+SNuvBUU36fSejFao+hTc8Q4taSN0kA/FaJjBF0Hg6IboLQPmEeG2/JAtjmQdStZCV6ERdHARpPqug7te5F4CxfTcDyKMpSg3gTbjZW06x3hFGdsXKIUQhKxMwBHPkpvdPJeDgBy3z8U4rtAIwwLw53utlx7B/slWHdUYcxPUqAvLTpDjPiJKJxeOzZmtBDYueO4D4o7C0uqwEe7A7jZR4C42ZfbWEyGYhrvI8+ayuNX0urTaJpvuLtv5FYDpJgTReW7tx5LZ4vJ+5Hq/TA5XB+1PvHxmaxZSuqEyxKXVdVl8n9meh4f6IEcutco1nKvMqyZblE9XegHlX1nodc3Yln2vC0XPMNaXHknuF2C6R7RwHIXKd4Gi1tmtDRyXXPly3553J60ee4/0uEFc9sngsLTp+62/E6phTeCEI8R+th3lcNUtBvqLcT2BVZbNWEIx8VC1zScTHEToB+qc18E11I0zvGv8WoPcYVezKIjOWgG8E3dE7yjnfEeoHwKDLLt+IyP4u0fN8Vs0GsWF3s3aAETcG8HQiB5q/Z9KpSNZoE2aQ4iPdnMDfnK0e0cO1xDnAC0k9ryB6hBnZrY3kniSRI5LGzY3jls18eRTgA4LaBeRYy07jyjvTTEUqdVpa9ocOB0/QrPjHNpYttIgCR5z6XT/wBnckFHF6Fy0zEbf6PVMOfb0S5zRcEe+0cHD6TUf0f2lUrU31iAfZzngi4icwaeFrclraDQ4a8RfzlZXpRssfs+Ip0W5H1BNjlDogmB2A8pR9k/2Aaf+p3/AMUMp61gY+hTb7V3e4EBveg63TaubU6YA60OeZN/4GQB/wAxWe2fgfZ0aeQiCwE75JF0VSwFRxFpB8PFcpJAODZfS27i8+Y1bm0e6ANI5bkFtfb+KqPZRpVHNqOqGHNJ+nug7hEpnidntpQajvugZnO5Boue5NuinRZ4qOxdankcYFNh1Yw/SMfSOkbghlKwlCgPaPRTGexbVq41+JyuBfTghhbvIv1nCZ7kjcyNajWg6AG7ieA39y+uB4LCPEQs/hMBhaLg2lRpscW5pa0Zrki/gUFjOmzI4jBvbSBFPI0kNzPkOOa0hmvjCf8ARjACkAGC5guO89pXekGID61GlItmeRusIBjtJ8E5wNGAO4HvUK2Go0M8M4fJRLXfMoawKup4qnF3AIkLkEALmXtUaeKYbBwVzhaUQAqrEz88VaHqbrHxUMoO+FwXpVVxAHH1PcEHVx7TqYA3fmr6zeI+fRKsRRPyEyMhMoI6zFNqOytkNBlztCXbgEXg9oHNke3L9W86bvBD0jSpNaHwMzondmPPcisTSBhwMwdeSCUthwxx6bLdqMzBxGsT3g/qs70moe1w+aJczxy7/wA1o6ZzUz2R8+CGq4cGieYP6+Uqxjm4yTRQzQ7QaPjuJS6uUy2lTyPe3e0uHgYSisbouQ7Y/iL8UUVUK9yJqIZ4VUuNFTiq1NyguK0vT9UtEW19OwbyVH2Y14dlu07lcPh2Ej+xqHDpuYIHGzB9kfSK1rKtHK75IJ0G8jq/dbvK86Z3jNA4vIJif4QuvbcG8neR1z9lv0Qr2NEtFxeYBm4E9Z2/sXM4OptsAOz0j1XTqO0f3FdZ8R5T+S9w+dGfqksIRbYZNJ32GfjlKMTtf2RIe0uAAuNfcBMzqtHjacsI5Uh/Us90hwk5j3f9o/kuljjkjTG45uPhkHbeo4isX+zLRGVxIGfXXlBg9y3NOpOXU2BFrTbevkm16JoYh7dxJcOw6ra9Etq56WUmS22uo3LPrr+LLXa9moxBgZzbfPDlZCOpio7M4yIkNIsBuLuW+F2lWcSKbmw3UEbiNxHNV7RxAbJIJa0afWdPoPVDMOAjp9FHaMxBawHqNLA4tG4Azp+icYTotA/eYio7kMrPwifNT/4iyMxIEXvqCqH7VdUEMNuIue5KtoZSGFN+Hw72Mo0murPsSfeA+s57pMJyzEPaQHtbB3tJ8LrIswZBD5hwOu+U1wm1pIpv6r+eh7Dx5KUwaHdel4LJdM8SMO1lQCSM2nAiYPeAtZTrjLG9fPf8WceBRpUwes5xmPqtFz4kI1G3RDk1syradavVOJfULSYgDSBoByWy2PttzAGVbiwDhp3ysTsraIFFuYF2V2UBvvGdNe1Pjj3NAmgQ08Sw+IC6WnRENqze4svcGOZcb4SPHbOpuMuBk+SYdAMUalF7XDKGvIb2ZQY8SudJKLgZYY3SdOA81wSVsF2ds0Ms2s4TuJB8J0TzDU6tO/tM7eBgHu4rGYLYJc/M+tVEEnqVXMBcddFo8NhnthrKtS8CHdee0keZXEtD4vn57lAU+a5TokCC4uO8k/8A5AhSAjsUWLorqoZtGXWhW4qpbsXMJrK5M5xANu7F9owiZbr2ECZHahcI5ww1zJEN8LFOcVTc8RmygGTz5BD4ukIgCAZEaWAMlTWwu1QLdm/5XaCfVSpXp5e0eMhW4Fn7q3CFKnTgkJttMz2j470uwpZXfI1M9sgH1lZZ+q+r9NMKM5ztlhAgjVthcL53tTZLmdZsPYdCLp2XaD47SE1RDVETVCHqBVi49lLlWrHqsqUVpH6tBEcQY1Os73H4IdrjJnURHLrZYA3WU2ut90/0OXKg6x5ub5mfitUqHHiM2ujpO+zh8ERhxLjwBPi6B+aofcTxDz4uCIwo9/7R8mkrpeEoLabfP1CfipfmfwBQ3H73kAFN2p7XfgCSyQWu23/SS/adEOB5kedIpq5s+NL0QdZsj7w8mOCODOPmH+IezT7MVgLsInjlcGfEpd0IqFro1ncvou1MEKlPKRILRP8A0gf7Vg9m0XYZ5pmnOUkAyZIkw4WVXlQp9izjd6N3QqWMjQ27oQ2OHUcNbO9LWUaQDssuLTFiLX+bIn9mcTYgi4JG8Ko3aofHTEdXC521ABcENA3kgZj6qh2xs4bByk3BaSCO8Jps2gW1ql5HvCeYAP4fNM24awEdkenx8UnY/wBM23A4xlm1nFvOHebgimUXk5qjgTyaAtC3DTpp22UK2Dm5NtwCK2dQNRquy+8bT/svl/TN5qV3kkuA6o5Abh3r6cXw10d3MlfPNsYbV0a9Y94v5yrGGLdsRmfwCdDsGageDFnAgEb447ltaOEdGX2fmMo71negjOvUbv6p4W0K+iOeA3s/JLyL8rG4V+BzopghTB+1PfAlM8bgi8xAgnyVHRSuKlLNEAudHYCQD5JviGHcYXJAOWzPnY+U9R8X0IzI/A4INubnifgNyArY12He0VTNN5gPiC1xNmuA1B4ptTrg6KA7bLaiDqFEPch3KGzkC1lbhlGrqotqCQoRzVkv+K0cz6eYZ6ere7NbihatcOqgAzDZ/wCZYbp1h/ptkOcTJBIJm0SFqNg4L2bASZOVgJNzIbefFNhsRlkkqNDs94NM96ILxmPcgNjPmmRO4eMmfVTxb8rhzHwTSoB7Xwraksd3ciJusLtbY9SgTDc9M+8Ba3Ec1vMVJuFBzc7S10Ir0BG07PiW2cG5hkDMw6O+B5pPWlfWtvdHXBpc0jLfMIsQee5fPdpbMYwmerrAJ1jgluJbjktUZ5yrKvrNv+SpKgGR+omP1H+r+aufrP8ApnyQrXetX0CJYZ/7X4VqtFVEM8C+mX1cjaLYB5l5/p/VKdpkim4jgf6XE/BOKber3O9Ahn4Si1w1/megUzv+9+AKJGv8z4LlSuwEy9ou7Vw+oElkko9afoh2NkffPofzUKm1cONazP8A0/pDUCYU8HXpvaHU3B7S91xpod6lEAnsZAHZ/wDCQku09kioDAaHgAtJkSS0Egk2MngtRTpe7axLfwEITGYYlrSAdBNiQYEQb8uCLUtMlNrZgnY6pQcQKdyILXkQCNbarmH6ajKJwxDpizgBrre6L6V4aHsqiQD1XNJnrRAM7wR6LO1qTSbiATENEme9ZmWDhKi/B9lY2HSJr3h/siyLHK6bHUEEX3J9gtoNgODgWu3/ADpwWJc9tOQ4GYEDiRp3rTbJ2C5lIZ7Of13ScrZP0QAJIERuU4sMshM8igaBmLbxHK6or1RvcqKWzBaR9JoMZ2jKZFsxk3RGHwIDJLesBM6mWO63lCb/AIcvlg/5MQOs0uBtbKXNPEsIPwIWf2rhpntI7g4j0eFpduYw0QMrA4l7tSR1XgH+5ZevtQu1pN0+s76oB9J7lcjBQh1QhzcnYi2diP2au2ofdmHfZdr4a9y3W0a4NEuYQQRYjeCLLJ43BteCSC25FjPPfyKlsHEFo9kSXUzpyMxZU82N+ofiyVo2nQnFt/ZmAES0QeKabT242k2YL3HQD4rEYnZ76TDVouLSLkTZwSTbO2cW1zOo1zTEHKSQDylIi+3g3r8mtxGKqVodWIMXa0DqifxFcpbXNAdYjIOJghZynh8bVAPtwxhv1RBHL3Zldr9E6jzlbVc9297wcoB1s7nKnow0jXYDpPQqmGVWOI1AIzeCaMxAcAQsfheibcMGObLnZgXO3u49g5LSCKfYIcLTbT8kiSolBGKfZV03QMx3KbgCWzcIDaOMB6rdBdx3DgFKIYm2pS9rXo0xeXZj2CFqMcMrDHH4pL0dph9d1UizbN8IHmVoNrMsxvFzZ7Jk+isw8KGZ/kK9g4z99VadCJHayGuHiCnuOoZsp5LM4LDFkvi8ufzh5l35rUYWpLWTxAKntugHB1YJRGoPH5CDxRcxwe3rN0cw7/4m8CE2xNDrn5jmlWNdEyiBWjtbEgAuE21HLjCzPSfZVCpSNYMFvfgWHB0eqPrYlB7Oq5RVY73HMcOIgjQldGSegq+UfJtp0WsJyw4aakwlhTPabgSREEE34gGErKD5DZ+mmaDsqfhCIoOuPtU/wIRmnY1/4QiKDutHNvlTla7Kpc4Atv8AVcf60mxrMTmIFd+U5+AIsd4HLzTZrur9xv8AU5TrMkntf5QfghX9k2Zt+z3uPWe53Wp6uJ1bfeh/+EiNPoP/ABrUsYJA5s8jHoQouw4y/cd+NdoJMzFbZ3X/AJn/ANaa9GsX7HqOswta6fquMt8DZH1cNLtPpj8CFfherp9Bn411Jo5s0tHUcB7P0KhGmmnEtPcdCs832jCcjnNvUNjaQJFlKjj8Q0m+cH2dnD6wvHel9CA3bWCFRjmk3I6uYaOGhDhz3b18+q4jKCCcrmEzb6XBbultVpEuY6nIcTHWZAMXCSdLdlMrUzUogGoIEMIIdO5zTcHmk5sLnv5H4cnXTEHQzZpxOINV5zMpQTNpcfdEnxX05uHI4jifd8XOuUq2Dg6eDoNpTNTV+W5L3STfQC0dytdtao6MrA3S56zusDxtqEWOLiqQM5OTCquHaA73RbXdMyJeVCpiaTZJcDcmAZMPEOHilWK9pUHXcXWdrp7gOgUXYeJ7z+EpyQADtM+1OaIhoAH2XgSk1XB3748yPitLUoa/zB55kJWw1zb63jAcFNEpiDG0op9uXxBylDYKjlAMbvR6Y7U6xygaHN4kLvsIaex/k5LlDQdhtLV1N1wRbvCkzZjXFrXbgL9ylTZmM/8AthT2RVLgZ3aHkszyRbx5Gg/D4FlgdyZ0mtA6oHag6IPEK/MOKKU3/I2TbO1GB1jvsPifBLyYcBwaR23tPgp7Q2k1gmbrPUNpSc3YB2C5PqkslKjQYuuGg8Vmq1UEQCLnxRWIxssceDSe+LJVspmd4Go1J/RCvSJOkaTY1MsZSG973OPYG2Cf4ynJA4D80pZ/m0IFpcO4ZhPkn9ZsOae0ef8AurMXoozW7AadECPnuXQwts27eG8b7cUaKfguGkhHqKKa5zQ6YPx5pdjWBwv1Dx1aU5yDgo1MMCLgHyU7IeJGDxuGIOnhos/0grVabDDSJGUHt3lfS6uyWEyPCULitlsc0sc0FpEEdqiMZJkdEvD87YsuJJchiVtumvQ2rhyarA6pQ1zCCWTueNQOaxhy8/JFX8i5H6SYbH7LvQBX0zDzynypgLy8thlQuPD/AEh8VOm+b/6p8oXl5Azib2cOQ7yyfVoXJkHsd5w5eXlCJRbHW+9/YqvZ2+6z8S6vKCSRoCe+p6LzcLp/L8l5eUWcQdQaGm30XebkL+yszuc1ozBwIjjkheXkS8ZKD/2dszB1b+IqoUQItuaPB5HxXl5LRzOU6Y9PNpHwVTm+Y/s/ReXkSOIPZfv9aaEriBP2PwkLi8iRIjp0pJJ3j0cFPajcrD/MC6vLpeBon7TJQJ3wB4BV4d2Wjm0+ZXV5ZMvWWIi9/SbKYLe8EK0dIS8hoIad07+xdXkD8HKTsExtU6uMoMPgEjeIA5kry8hGsuq1v3NzLjmB7Z/IAI3Y4DGB53wSeQM+ZXF5QvRczV9HGudRpPcIMEjjBcSPKE9rtlvZB8FxeTkLaKfakLgqri8ueglFHS/rNbvILjyaPzJAVxC6vIo+HT1oqeRc8LHkfkhCuC8vIrIopqNGhEjQg89xCxO1P8N8LVqGo1z6INy1kZZ3kA6di8vKQXFH/9k=" alt="" className="img-30"/>

              <Link to="/derechos1">
               <button type="button" class="btn-87 btn-outline-dark">Siguiente</button>
               </Link>


        </>
    );
    
    
}

export default Adulto;
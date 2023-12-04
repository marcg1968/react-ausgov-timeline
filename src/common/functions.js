

/* src: https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Australia?action=edit&veswitched=1&oldid=1184251271 */
const text = `
1
Edmund Barton
MP for [[Division of Hunter|Hunter, NSW]]
1 January<br/>1901
24 September<br/>1903
[[Protectionist Party|Protectionist]]

2
Alfred Deakin
MP for [[Division of Ballarat|Ballaarat, Vic]]
24 September<br />1903
27 April<br />1904
[[Protectionist Party|Protectionist]]

3
Chris Watson
MP for [[Division of Bland|Bland, NSW]]
27 April<br/>1904
18 August<br/>1904
[[Australian Labor Party|Labor]]

4
George Reid
MP for [[Division of East Sydney|East Sydney, NSW]]
18 August<br/>1904
5 July<br/>1905
[[Free Trade Party|Free Trade]]

5
Alfred Deakin
MP for [[Division of Ballarat|Ballaarat, Vic]]
5 July<br/>1905
13 November<br/>1908
[[Protectionist Party|Protectionist]]

5
Andrew Fisher
MP for [[Division of Wide Bay|Wide Bay, Qld]]
13 November<br/>1908
2 June<br/>1909
[[Australian Labor Party|Labor]]

(2)
Alfred Deakin
MP for [[Division of Ballarat|Ballaarat, Vic]]
2 June<br/>1909
29 April<br/>1910
[[Commonwealth Liberal Party|Liberal]]

(5)
Andrew Fisher
MP for [[Division of Wide Bay|Wide Bay, Qld]]
29 April<br/>1910
24 June<br/>1913
[[Australian Labor Party|Labor]]

6
Joseph Cook
MP for [[Division of Parramatta|Parramatta, NSW]]
24 June<br />1913
17 September<br />1914
[[Commonwealth Liberal Party|Liberal]]

(5)
Andrew Fisher
MP for [[Division of Wide Bay|Wide Bay, Qld]]
17 September<br/>1914
27 October<br/>1915
[[Australian Labor Party|Labor]]

7
Billy Hughes
MP for [[Division of West Sydney|West Sydney, NSW]] (until 1917)}}<br/>{{Small|MP for [[Division of Bendigo|Bendigo, Vic]] (1917–22)}}<br/>{{Small|MP for [[Division of North Sydney|North Sydney, NSW]] (from 1922)}}
27 October<br/>1915
9 February<br/>1923
[[Australian Labor Party|Labor]], [[National Labor Party|National Labor]], [[Nationalist Party (Australia)|Nationalist]], 

8
Stanley Bruce
MP for [[Division of Flinders|Flinders, Vic]]}}
9 February<br />1923
22 October<br />1929
[[Nationalist Party (Australia)|Nationalist]]<br />(''[[Coalition (Australia)|Coalition]]'')

9
James Scullin
MP for [[Division of Yarra|Yarra, Vic]]
22 October<br/>1929
6 January<br/>1932
[[Australian Labor Party|Labor]]

10
Joseph Lyons
MP for [[Division of Wilmot|Wilmot, Tas]]
6 January<br />1932
7 April<br />1939
[[United Australia Party|United Australia]]

11
Earle Page
MP for [[Division of Cowper|Cowper, NSW]]
7 April<br/>1939
26 April<br/>1939
[[National Party of Australia|Country]]

12
Robert Menzies
MP for [[Division of Kooyong|Kooyong, Vic]]
26 April<br/>1939
29 August<br/>1941
[[United Australia Party|United Australia]]

13
Arthur Fadden
MP for [[Division of Darling Downs|Darling Downs, Qld]]
29 August<br/>1941
7 October<br/>1941
[[National Party of Australia|Country]]

14
John Curtin
MP for [[Division of Fremantle|Fremantle, WA]]
7 October<br/>1941
5 July<br/>1945
[[Australian Labor Party|Labor]]

15
Frank Forde
MP for [[Division of Capricornia|Capricornia, Qld]]
5 July<br/>1945
13 July<br/>1945
[[Australian Labor Party|Labor]]

16
Ben Chifley
MP for [[Division of Macquarie|Macquarie, NSW]]
13 July<br/>1945
19 December<br/>1949
[[Australian Labor Party|Labor]]

(12)
Robert Menzies
MP for [[Division of Kooyong|Kooyong, Vic]]
19 December<br />1949
26 January<br />1966
[[Liberal Party of Australia|Liberal]]

17
Harold Holt
MP for [[Division of Higgins|Higgins, Vic]]
26 January<br/>1966
17 December<br/>1967
[[Liberal Party of Australia|Liberal]]

18
John McEwen
MP for [[Division of Murray|Murray, Vic]]
19 December<br/>1967
10 January<br/>1968
[[Coalition (Australia)|Coalition]]

19
John Gorton
MP for [[Division of Higgins|Higgins, Vic]]
10 January<br />1968
10 March<br/>1971
[[Liberal Party of Australia|Liberal]]

20
William McMahon
MP for [[Division of Lowe|Lowe, NSW]]
10 March<br/>1971
5 December<br/>1972
[[Liberal Party of Australia|Liberal]]

21
Gough Whitlam
MP for [[Division of Werriwa|Werriwa, NSW]]
5 December<br/>1972
11 November<br/>1975
[[Australian Labor Party|Labor]]

22
Malcolm Fraser
MP for [[Division of Wannon|Wannon, Vic]]
11 November<br />1975
11 March<br />1983
[[Liberal Party of Australia|Liberal]]

23
Bob Hawke
MP for [[Division of Wills|Wills, Vic]]
11 March<br />1983
20 December<br />1991
[[Australian Labor Party|Labor]]

24
Paul Keating
MP for [[Division of Blaxland|Blaxland, NSW]]}}
20 December<br />1991
11 March<br />1996
[[Australian Labor Party|Labor]]

25
John Howard
MP for [[Division of Bennelong|Bennelong, NSW]]
11 March<br />1996
3 December<br />2007
[[Liberal Party of Australia|Liberal]]

26
Kevin Rudd
MP for [[Division of Griffith|Griffith, Qld]]
3 December<br />2007
24 June<br />2010
[[Australian Labor Party|Labor]]

27
Julia Gillard
MP for [[Division of Lalor|Lalor, Vic]]
24 June<br/>2010
27 June<br/>2013
[[Australian Labor Party|Labor]]

(26)
Kevin Rudd
MP for [[Division of Griffith|Griffith, Qld]]
27 June<br/>2013
18 September<br/>2013
[[Australian Labor Party|Labor]]

28
Tony Abbott
MP for [[Division of Warringah|Warringah, NSW]]
18 September<br/>2013
15 September<br/>2015
[[Liberal Party of Australia|Liberal]]

29
Malcolm Turnbull
MP for [[Division of Wentworth|Wentworth, NSW]]
15 September<br/>2015
24 August<br/>2018
[[Liberal Party of Australia|Liberal]]

30
Scott Morrison
MP for [[Division of Cook|Cook, NSW]]
24 August<br/>2018
23 May<br/>2022
[[Liberal Party of Australia|Liberal]]

31
Anthony Albanese
MP for [[Division of Grayndler|Grayndler, NSW]]
23 May<br />2022
Incumbent
[[Australian Labor Party|Labor]]
`

export const pmlist = () => {
    let arr = text.split(/\n\n/)
    return arr.map(e => {
        let _arr = e
            .split(/\n/)
            .filter(e => e.length)
            .map((e, i) => e.replace(/<br *\/>/, ' '))
            .map((e, i) => e.replace(/\s+/, ' '))
            .map((e, i) => {
                const r = e.match(/\[\[.+\|([^\]]+)]]/)
                // console.log(272, i, r ? [...r] : undefined)
                return r ? r[1] : e
            })
        let diff = (new Date(_arr[4])).valueOf() - (new Date(_arr[3])).valueOf()
        // console.log(277, diff, isNaN(diff))
        diff = diff / ( 86400 * 1000 * 100 )
        return [ ..._arr, isNaN(diff) ? 1 : diff.toFixed(2) ]
    })
}

/* on https://www.naa.gov.au/explore-collection/australias-prime-ministers
arr = Array.from(document.querySelectorAll('.featured-item-feature-thumb-summary a[hreflang="en"]')).map(e => ({pm: e.innerHTML, href: e.href}))

*/
export const naaPMlinks = [
    {
        "pm": "Edmund Barton",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/edmund-barton"
    },
    {
        "pm": "Alfred Deakin",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/alfred-deakin"
    },
    {
        "pm": "Chris Watson",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/chris-watson"
    },
    {
        "pm": "George Reid",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/george-reid"
    },
    {
        "pm": "Andrew Fisher",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/andrew-fisher"
    },
    {
        "pm": "Joseph Cook",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/joseph-cook"
    },
    {
        "pm": "William Hughes",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/william-hughes"
    },
    {
        "pm": "Stanley Bruce",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/stanley-bruce"
    },
    {
        "pm": "James Scullin",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/james-scullin"
    },
    {
        "pm": "Joseph Lyons",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/joseph-lyons"
    },
    {
        "pm": "Earle Page",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/earle-page"
    },
    {
        "pm": "Robert Menzies",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/robert-menzies"
    },
    {
        "pm": "Arthur Fadden",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/arthur-fadden"
    },
    {
        "pm": "John Curtin",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/john-curtin"
    },
    {
        "pm": "Francis Forde",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/francis-forde"
    },
    {
        "pm": "Ben Chifley",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/ben-chifley"
    },
    {
        "pm": "Harold Holt",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/harold-holt"
    },
    {
        "pm": "John McEwen",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/john-mcewen"
    },
    {
        "pm": "John Gorton",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/john-gorton"
    },
    {
        "pm": " William McMahon",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/william-mcmahon"
    },
    {
        "pm": "Gough Whitlam",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/gough-whitlam"
    },
    {
        "pm": "Malcolm Fraser",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/malcolm-fraser"
    },
    {
        "pm": " Robert Hawke",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/robert-hawke"
    },
    {
        "pm": "Paul Keating",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/paul-keating"
    },
    {
        "pm": "John Howard",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/john-howard"
    },
    {
        "pm": "Kevin Rudd",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/kevin-rudd"
    },
    {
        "pm": "Julia Gillard",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/julia-gillard"
    },
    {
        "pm": "Tony Abbott",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/tony-abbott"
    },
    {
        "pm": "Malcolm Turnbull",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/malcolm-turnbull"
    },
    {
        "pm": "Scott Morrison",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/scott-morrison"
    },
    {
        "pm": "Anthony Albanese",
        "href": "https://www.naa.gov.au/explore-collection/australias-prime-ministers/anthony-albanese"
    }
]
## Project Idea Overview

- Header
    - Humburger Menu Icon
    - Logo
    - Search
- Body
    - Sidebar
        - Humburger Menu Items
    - Main Container
        - Button List
        - Video Container
            - Video card /* N


## Debouncing

- typing slow = 200ms
- typing fast = 150ms

Performance:
- iphone for max = 14 letter * 1000(people) = 14000(API calls)
- with debouncing  = 3 API calls = 3000
Debouncing with 200ms
- if differance between 2 key strokes is < 200ms - Descline API Call
- >200 ms make an api call

# complexity
- search in array = O(n) [i,ip,ipho,iphon]
- search in object = O(1) {i:{},ip:{},iph:{}}

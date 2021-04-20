- generally with useRef, useEffect throw error as ref is not defined before accessing it.

# Solution

- useCallback() 

- initialize with useCallback as wrapperRef and append inside it.
- for cleanup, componentWillUnmount
- set return inside callback initial state
- check for null and return for error handling
 
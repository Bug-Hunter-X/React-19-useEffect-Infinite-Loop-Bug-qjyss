```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The addition of [count] as a dependency fixes the infinite loop
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```
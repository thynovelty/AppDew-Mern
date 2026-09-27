import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        title="React Basics"
        description="Learn how to create components and props."
        image="https://picsum.photos/300/200"
      />

      <Card
        title="Reusable Components"
        description="Build flexible components for scalability."
        image="https://picsum.photos/301/200"
      />
    </div>
  );
}

export default App;
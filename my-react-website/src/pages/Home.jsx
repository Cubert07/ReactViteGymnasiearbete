import Start from '../components/Start';
import Nav from '../components/Nav';
export default function Home() {
  return (
    <div className="p-6">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <Nav />
      <Start />
    </div>
  );
}
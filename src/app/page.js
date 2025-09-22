import TopMovies from "./components/TopMovies";

export default function Home() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "70vh",
				textAlign: "center",
			}}
		>
			<TopMovies />
		</div>
	);
}

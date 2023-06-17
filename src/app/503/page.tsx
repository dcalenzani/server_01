const HomePage = () => {
    return (
        <>
        <div className="flex min-h-screen flex-col items-center justify-between p-72">
            <p className="">PAGE UNDER CONSTRUCTION. DO YOU WANT TO ...</p>
            <div className="fixed flex flex-row-reverse m-10 gap-32 [&>a]:p-7 [&>a]:rounded-lg [&>a]:border-neutral-700">
                <a href="/" className="hover:border">Go home?</a>
                <a href="/dropplet" className="hover:border">Go back?</a>
            </div>
        </div>
    </>
    );
};
export default HomePage;
const HomePage = () => {
    return (
        <>
        <div className="flex min-h-screen flex-col items-center justify-between p-72 ">
            <p className="text-2xl ">
                PAGE UNDER CONSTRUCTION. &#128554;
            </p>
            <p>    
                DO YOU WANT TO ...
            </p>
            <div className="flex flex-row-reverse m-10 gap-32 [&>a]:p-7 [&>a]:rounded-lg [&>a]:border-neutral-700">
                <a href="/" className="hover:border">Go home?</a>
            </div>
        </div>
    </>
    );
};
export default HomePage;
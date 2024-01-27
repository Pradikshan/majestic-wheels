const SplitScreen = ({
    children,
}) => {
    const [left, right] = children;
    return (
        <div className="flex lg:flex-row sm:flex-col">
            <>
                {left}
            </>
            <>
                {right}
            </>
        </div>
    )
}

export default SplitScreen;
const SplitScreen = ({
    children,
}) => {
    const [left, right] = children;
    return (
        <div className="flex flex-col sm:flex-row">
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
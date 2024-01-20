const SplitScreen = ({
    children,
}) => {
    const [left, right] = children;
    return (
        <div className="flex flex-row">
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
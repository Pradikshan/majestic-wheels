const SplitScreen = ({
    children,
}) => {
    const [left, right] = children;
    return (
        <div className="flex flex-row mt-5 pt-5">
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
const SplitScreen = ({
    children,
}) => {
    const [left, right] = children;
    return (
        <div className="flex flex-row -mt-6">
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
export const Tag = ({ text, className }) => {
    return (
        <>
            <p className={`${className} px-2 py-[2px] border border-neutral-400 rounded-full font-light text-xs uppercase w-fit`}>
                {text}
            </p>
        </>
    )
}
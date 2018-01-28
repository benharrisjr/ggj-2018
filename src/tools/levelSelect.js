export default const LevelSelect = (props) => (
    <section>
        {tools.map((tool, index) => <button key={tool.name}>{tool.name}</button>)}
    </section>
)

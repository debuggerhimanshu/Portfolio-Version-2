import ToolNode from "./ToolNode";

export default function Toolchain() {
  return (
    <section
      id="toolchain"
      className="toolchain-section"
    >
      <div className="section-heading">
        <span>... /Toolchain ...</span>

        <p>
          Technologies, domains and platforms
          behind my work.
        </p>
      </div>

      <div className="toolchain-grid">
        <div>
          <span>Programming</span>

          <ToolNode name="Java" />
          <ToolNode name="C++" />
          <ToolNode name="Python" />
          <ToolNode name="TypeScript" />
        </div>

        <div>
          <span>Domains</span>

          <ToolNode name="DSA" />
          <ToolNode name="AI / ML" />
          <ToolNode name="Cybersecurity" />
          <ToolNode name="Web" />
        </div>

        <div>
          <span>Platforms</span>

          <ToolNode name="GitHub" />
          <ToolNode name="LeetCode" />
          <ToolNode name="AWS" />
          <ToolNode name="Figma" />
        </div>
      </div>
    </section>
  );
}
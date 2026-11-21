/** Visible marker on placeholder content. Remove `sample: true` in lib/content.ts once real data is in. */
export default function SampleBadge({ show = true }: { show?: boolean }) {
  if (!show) return null;
  return (
    <span className="sample-badge" title="Placeholder — replace with real client data in lib/content.ts">
      Sample
    </span>
  );
}

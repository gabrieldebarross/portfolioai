import type { ProjectVariant } from "@/content/projects";

function Chrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-[1.4cqw] border-b border-[var(--mock-line)] px-[2.6cqw] py-[1.7cqw]">
      <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[var(--mock-line)]" />
      <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[var(--mock-line)]" />
      <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[var(--mock-line)]" />
      <span className="ml-[1.4cqw] truncate font-mono text-[1.7cqw] text-[var(--mock-muted)]">
        {url}
      </span>
      <span className="ml-auto h-[1.6cqw] w-[1.6cqw] rounded-[0.4cqw] border border-[var(--mock-line)]" />
    </div>
  );
}

function Sidebar({ accentIndex = 0 }: { accentIndex?: number }) {
  return (
    <div className="flex w-[19%] flex-col gap-[2.2cqw] border-r border-[var(--mock-line)] p-[2.2cqw]">
      <div className="flex items-center gap-[1.2cqw]">
        <span className="h-[2.6cqw] w-[2.6cqw] rounded-[0.6cqw] bg-[var(--mock-accent)]" />
        <span className="h-[0.9cqw] w-[55%] rounded-full bg-[var(--mock-ink)]/40" />
      </div>
      <div className="mt-[1cqw] flex flex-col gap-[1.7cqw]">
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex items-center gap-[1cqw]"
            style={{ opacity: item === accentIndex ? 1 : 0.45 }}
          >
            <span
              className="h-[1.1cqw] w-[1.1cqw] rounded-[0.2cqw]"
              style={{
                background:
                  item === accentIndex
                    ? "var(--mock-accent)"
                    : "var(--mock-muted)",
              }}
            />
            <span
              className="h-[0.8cqw] rounded-full bg-[var(--mock-ink)]"
              style={{ width: `${52 + item * 7}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-[1cqw]">
        <span className="h-[2cqw] w-[2cqw] rounded-full bg-[var(--mock-line)]" />
        <span className="h-[0.8cqw] w-[45%] rounded-full bg-[var(--mock-ink)]/35" />
      </div>
    </div>
  );
}

function TramitaY() {
  const rows = [
    { code: "2026/014", width: 72, stage: "Análise" },
    { code: "2026/013", width: 45, stage: "Parecer" },
    { code: "2026/012", width: 88, stage: "Publicado" },
    { code: "2026/011", width: 30, stage: "Rascunho" },
  ];

  return (
    <>
      <Chrome url="tramitay.app/processos" />
      <div className="flex min-h-0 flex-1">
        <Sidebar accentIndex={1} />
        <div className="flex-1 p-[2.8cqw]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[1.5cqw] uppercase tracking-[0.16em] text-[var(--mock-muted)]">
                Módulo
              </p>
              <p className="mt-[0.6cqw] text-[2.6cqw] font-semibold tracking-[-0.02em]">
                Processos
              </p>
            </div>
            <div className="flex items-center gap-[1.2cqw]">
              <span className="rounded-full bg-[var(--mock-accent)] px-[1.6cqw] py-[0.7cqw] font-mono text-[1.4cqw] text-white">
                12 ativos
              </span>
              <span className="h-[2.6cqw] w-[2.6cqw] rounded-[0.5cqw] bg-[var(--mock-ink)]" />
            </div>
          </div>

          <div className="mt-[2.6cqw] grid grid-cols-3 gap-[1.4cqw]">
            {[
              ["Em andamento", "08"],
              ["Aguardando", "03"],
              ["Concluídos", "21"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[0.8cqw] border border-[var(--mock-line)] p-[1.6cqw]"
              >
                <p className="font-mono text-[1.25cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                  {label}
                </p>
                <p className="mt-[0.5cqw] text-[2.4cqw] font-semibold leading-none">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[2.4cqw] overflow-hidden rounded-[0.8cqw] border border-[var(--mock-line)]">
            <div className="grid grid-cols-[1.1fr_1.6fr_0.7fr] gap-[1.4cqw] border-b border-[var(--mock-line)] bg-[var(--mock-soft)] px-[1.6cqw] py-[1.1cqw] font-mono text-[1.2cqw] uppercase tracking-[0.12em] text-[var(--mock-muted)]">
              <span>Processo</span>
              <span>Etapa</span>
              <span>Prazo</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.code}
                className="grid grid-cols-[1.1fr_1.6fr_0.7fr] items-center gap-[1.4cqw] border-b border-[var(--mock-line)] px-[1.6cqw] py-[1.4cqw] last:border-0"
              >
                <span className="font-mono text-[1.45cqw]">{row.code}</span>
                <span className="flex items-center gap-[1cqw]">
                  <span
                    className="h-[0.9cqw] rounded-full"
                    style={{
                      width: `${row.width}%`,
                      background: "var(--mock-accent)",
                      opacity: 0.85,
                    }}
                  />
                </span>
                <span className="rounded-full border border-[var(--mock-line)] px-[1cqw] py-[0.4cqw] text-center font-mono text-[1.1cqw] text-[var(--mock-muted)]">
                  {row.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function DevAcademy() {
  const bars = [38, 62, 48, 78, 56, 88, 70];

  return (
    <>
      <Chrome url="devacademy.app/admin" />
      <div className="flex min-h-0 flex-1">
        <Sidebar accentIndex={2} />
        <div className="flex-1 p-[2.6cqw]">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[1.35cqw] uppercase tracking-[0.16em] text-[var(--mock-muted)]">
                Visão geral
              </p>
              <p className="mt-[0.5cqw] text-[2.4cqw] font-semibold tracking-[-0.02em]">
                Matrículas
              </p>
            </div>
            <span className="rounded-[0.5cqw] bg-[var(--mock-accent)] px-[1.5cqw] py-[0.7cqw] font-mono text-[1.2cqw] text-[#17121f]">
              + nova
            </span>
          </div>

          <div className="mt-[2.3cqw] grid grid-cols-3 gap-[1.3cqw]">
            {[
              ["Alunos", "184"],
              ["Cursos", "12"],
              ["Receita", "R$ 38k"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[0.8cqw] border border-[var(--mock-line)] bg-[var(--mock-soft)] p-[1.5cqw]"
              >
                <p className="font-mono text-[1.15cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                  {label}
                </p>
                <p className="mt-[0.5cqw] text-[2.1cqw] font-semibold leading-none">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[1.6cqw] grid grid-cols-[1.3fr_1fr] gap-[1.3cqw]">
            <div className="rounded-[0.8cqw] border border-[var(--mock-line)] p-[1.7cqw]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[1.15cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                  Receita / mês
                </span>
                <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[var(--mock-accent)]" />
              </div>
              <div className="mt-[1.4cqw] flex h-[8cqw] items-end gap-[1cqw]">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[0.3cqw]"
                    style={{
                      height: `${height}%`,
                      background:
                        index === bars.length - 2
                          ? "var(--mock-accent)"
                          : "var(--mock-line)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[0.8cqw] border border-[var(--mock-line)] p-[1.7cqw]">
              <span className="font-mono text-[1.15cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                Cursos
              </span>
              <div className="mt-[1.2cqw] flex flex-col gap-[1.1cqw]">
                {[78, 54, 66].map((width, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <span className="h-[0.75cqw] w-[42%] rounded-full bg-[var(--mock-ink)]/45" />
                      <span className="h-[0.7cqw] w-[12%] rounded-full bg-[var(--mock-accent)]/70" />
                    </div>
                    <div className="mt-[0.6cqw] h-[0.5cqw] w-full rounded-full bg-[var(--mock-line)]">
                      <div
                        className="h-full rounded-full bg-[var(--mock-accent)]"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StockFlow() {
  return (
    <>
      <Chrome url="stockflow.app/dashboard" />
      <div className="flex min-h-0 flex-1">
        <Sidebar accentIndex={0} />
        <div className="flex-1 p-[2.6cqw]">
          <div className="flex items-center justify-between">
            <p className="text-[2.3cqw] font-semibold tracking-[-0.02em]">
              Estoque
            </p>
            <span className="rounded-full border border-[var(--mock-accent)] px-[1.3cqw] py-[0.5cqw] font-mono text-[1.15cqw] text-[var(--mock-accent)]">
              4 alertas
            </span>
          </div>

          <div className="mt-[2cqw] grid grid-cols-4 gap-[1.1cqw]">
            {[
              ["Vendas", "R$ 12,4k"],
              ["Produtos", "86"],
              ["Estoque", "312"],
              ["Margem", "32%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[0.7cqw] border border-[var(--mock-line)] p-[1.2cqw]"
              >
                <p className="font-mono text-[1.05cqw] uppercase tracking-[0.08em] text-[var(--mock-muted)]">
                  {label}
                </p>
                <p className="mt-[0.5cqw] text-[1.7cqw] font-semibold leading-none">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[1.5cqw] grid grid-cols-[1.35fr_1fr] gap-[1.2cqw]">
            <div className="rounded-[0.7cqw] border border-[var(--mock-line)] p-[1.5cqw]">
              <p className="font-mono text-[1.05cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                Faturamento
              </p>
              <div className="mt-[1.3cqw] flex h-[7.5cqw] items-end gap-[0.8cqw]">
                {[42, 30, 58, 48, 74, 62, 90, 70].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[0.25cqw]"
                    style={{
                      height: `${height}%`,
                      background:
                        index === 6
                          ? "var(--mock-accent)"
                          : "color-mix(in srgb, var(--mock-ink) 18%, transparent)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[0.7cqw] border border-[var(--mock-line)] p-[1.5cqw]">
              <p className="font-mono text-[1.05cqw] uppercase tracking-[0.1em] text-[var(--mock-muted)]">
                Estoque crítico
              </p>
              <div className="mt-[1cqw] flex flex-col gap-[1cqw]">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-[1cqw]"
                  >
                    <span className="h-[0.75cqw] w-[45%] rounded-full bg-[var(--mock-ink)]/40" />
                    <span className="rounded-[0.3cqw] bg-[var(--mock-accent-soft)] px-[0.9cqw] py-[0.35cqw] font-mono text-[1cqw] text-[var(--mock-accent)]">
                      2 un.
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Cis() {
  return (
    <div className="relative flex-1">
      <Chrome url="cis-eta.vercel.app" />
      <div className="p-[2.6cqw]">
        <div className="flex items-center justify-between border-b border-[var(--mock-line)] pb-[1.4cqw]">
          <span className="h-[1.6cqw] w-[8cqw] rounded-full bg-[var(--mock-ink)]/70" />
          <div className="flex items-center gap-[1.4cqw]">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className="h-[0.7cqw] w-[3.4cqw] rounded-full bg-[var(--mock-ink)]/30"
              />
            ))}
            <span className="h-[1.8cqw] w-[5cqw] rounded-full bg-[var(--mock-accent)]" />
          </div>
        </div>

        <div className="mt-[2.6cqw] grid grid-cols-[1.25fr_1fr] items-center gap-[2.4cqw]">
          <div>
            <span className="font-mono text-[1.1cqw] uppercase tracking-[0.18em] text-[var(--mock-accent)]">
              Instituto
            </span>
            <div className="mt-[1.2cqw] space-y-[0.9cqw]">
              <span className="block h-[2.5cqw] w-[92%] rounded-[0.3cqw] bg-[var(--mock-ink)]" />
              <span className="block h-[2.5cqw] w-[70%] rounded-[0.3cqw] bg-[var(--mock-ink)]" />
            </div>
            <div className="mt-[1.4cqw] space-y-[0.55cqw]">
              <span className="block h-[0.7cqw] w-[85%] rounded-full bg-[var(--mock-ink)]/30" />
              <span className="block h-[0.7cqw] w-[72%] rounded-full bg-[var(--mock-ink)]/30" />
            </div>
            <div className="mt-[1.8cqw] flex gap-[1cqw]">
              <span className="h-[2.2cqw] w-[7cqw] rounded-[0.3cqw] bg-[var(--mock-accent)]" />
              <span className="h-[2.2cqw] w-[7cqw] rounded-[0.3cqw] border border-[var(--mock-line)]" />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[0.6cqw] bg-[var(--mock-accent-soft)]">
            <div className="absolute inset-[12%] rounded-[0.4cqw] border border-[var(--mock-accent)]/40" />
            <div className="absolute bottom-[10%] left-[10%] h-[38%] w-[45%] rounded-[0.4cqw] bg-[var(--mock-accent)]/25" />
            <div className="absolute right-[8%] top-[12%] h-[24%] w-[30%] rounded-full bg-[var(--mock-accent)]/40" />
          </div>
        </div>

        <div className="mt-[2.6cqw] grid grid-cols-3 gap-[1.3cqw] border-t border-[var(--mock-line)] pt-[2cqw]">
          {[0, 1, 2].map((item) => (
            <div key={item} className="space-y-[0.7cqw]">
              <span className="block h-[1.2cqw] w-[1.2cqw] rounded-[0.2cqw] bg-[var(--mock-accent)]" />
              <span className="block h-[0.8cqw] w-[75%] rounded-full bg-[var(--mock-ink)]/50" />
              <span className="block h-[0.6cqw] w-[95%] rounded-full bg-[var(--mock-ink)]/20" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-[2%] right-[4%] w-[16%] rounded-[1.4cqw] border-[0.6cqw] border-[var(--mock-ink)] bg-[var(--mock-bg)] shadow-lg">
        <div className="flex justify-center py-[0.5cqw]">
          <span className="h-[0.3cqw] w-[30%] rounded-full bg-[var(--mock-ink)]/30" />
        </div>
        <div className="space-y-[0.6cqw] px-[0.8cqw] pb-[1.2cqw]">
          <span className="block h-[0.5cqw] w-[70%] rounded-full bg-[var(--mock-ink)]/60" />
          <span className="block h-[0.4cqw] w-[90%] rounded-full bg-[var(--mock-ink)]/20" />
          <span className="block h-[1.4cqw] w-full rounded-[0.2cqw] bg-[var(--mock-accent)]" />
        </div>
      </div>
    </div>
  );
}

function ApiTask() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--mock-line)] px-[2.4cqw] py-[1.4cqw]">
        <div className="flex items-center gap-[1.2cqw]">
          <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-[var(--mock-line)]" />
          <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-[var(--mock-line)]" />
          <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-[var(--mock-line)]" />
        </div>
        <span className="font-mono text-[1.4cqw] text-[var(--mock-muted)]">
          api_task — bash
        </span>
        <span className="font-mono text-[1.2cqw] text-[var(--mock-accent)]">
          ● 200
        </span>
      </div>
      <div className="p-[2.4cqw] font-mono text-[1.55cqw] leading-[1.9]">
        <p className="text-[var(--mock-muted)]">
          <span className="text-[var(--mock-accent)]">$</span> curl -X POST
          /auth/login
        </p>
        <p className="mt-[1.2cqw] text-[var(--mock-muted)]">
          {"{"}
        </p>
        <div className="pl-[1.8cqw]">
          <p>
            <span className="text-[var(--mock-accent)]">"token"</span>
            <span className="text-[var(--mock-muted)]">: </span>
            <span>"eyJhbGciOiJIUzI1NiIs…"</span>
            <span className="text-[var(--mock-muted)]">,</span>
          </p>
          <p>
            <span className="text-[var(--mock-accent)]">"user"</span>
            <span className="text-[var(--mock-muted)]">: {"{"}</span>
          </p>
          <div className="pl-[1.8cqw]">
            <p>
              <span className="text-[var(--mock-accent)]">"id"</span>
              <span className="text-[var(--mock-muted)]">: </span>
              <span>42</span>
              <span className="text-[var(--mock-muted)]">,</span>
            </p>
            <p>
              <span className="text-[var(--mock-accent)]">"role"</span>
              <span className="text-[var(--mock-muted)]">: </span>
              <span>"admin"</span>
            </p>
          </div>
          <p className="text-[var(--mock-muted)]">{"}"}</p>
        </div>
        <p className="text-[var(--mock-muted)]">{"}"}</p>
        <p className="mt-[1.4cqw] text-[var(--mock-muted)]">
          <span className="text-[var(--mock-accent)]">$</span>{" "}
          <span className="caret inline-block h-[1.5cqw] w-[0.8cqw] translate-y-[0.2cqw] bg-[var(--mock-ink)]" />
        </p>
      </div>
    </>
  );
}

export function ProjectPreview({
  variant,
  className = "",
}: {
  variant: ProjectVariant;
  className?: string;
}) {
  const theme =
    variant === "tramitay"
      ? "mock"
      : variant === "devacademy"
        ? "mock mock-dark"
        : variant === "stockflow"
          ? "mock mock-php"
          : variant === "cis"
            ? "mock mock-web"
            : "mock mock-api";

  return (
    <div
      aria-hidden="true"
      className={`${theme} relative h-full w-full overflow-hidden ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {variant === "tramitay" && <TramitaY />}
      {variant === "devacademy" && <DevAcademy />}
      {variant === "stockflow" && <StockFlow />}
      {variant === "cis" && <Cis />}
      {variant === "apitask" && <ApiTask />}
    </div>
  );
}

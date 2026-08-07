local replacements = {
  { marker = "🟢", latex = "\\textcolor{SignalGreen}{\\ensuremath{\\bullet}}" },
  { marker = "🔴", latex = "\\textcolor{SignalRed}{\\ensuremath{\\bullet}}" },
  { marker = "🟠", latex = "\\textcolor{SignalOrange}{\\ensuremath{\\bullet}}" },
  { marker = "🟡", latex = "\\textcolor{SignalYellow}{\\ensuremath{\\bullet}}" },
  { marker = "⚠️", latex = "\\textcolor{SignalOrange}{\\textbullet}" },
  { marker = "⚠", latex = "\\textcolor{SignalOrange}{\\textbullet}" },
  { marker = "👉", latex = "\\textcolor{ResearchGold}{\\ensuremath{\\longrightarrow}}" },
}

local function earliest_marker(text)
  local best_start = nil
  local best_finish = nil
  local best_latex = nil

  for _, replacement in ipairs(replacements) do
    local start_index, finish_index = string.find(text, replacement.marker, 1, true)
    if start_index and (not best_start or start_index < best_start) then
      best_start = start_index
      best_finish = finish_index
      best_latex = replacement.latex
    end
  end

  return best_start, best_finish, best_latex
end

function Str(element)
  local text = element.text
  local result = pandoc.Inlines({})
  local changed = false

  while #text > 0 do
    local start_index, finish_index, latex = earliest_marker(text)
    if not start_index then
      result:insert(pandoc.Str(text))
      break
    end

    changed = true
    if start_index > 1 then
      result:insert(pandoc.Str(string.sub(text, 1, start_index - 1)))
    end
    result:insert(pandoc.RawInline("latex", latex))
    text = string.sub(text, finish_index + 1)
  end

  if changed then
    return result
  end
end

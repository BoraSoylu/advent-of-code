defmodule Main do
  def solve(data) do
    data
    |> IO.puts()
  end
end

{:ok, data} = File.read("input.txt")

Main.solve(data)

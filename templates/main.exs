defmodule Main do
  def solve(data) do
    data
    |> String.split(~r/\R/)
  end
end

{:ok, data} = File.read("input.txt")

Main.solve(data)
|> IO.inspect()

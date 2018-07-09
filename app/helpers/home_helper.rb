module HomeHelper
  def wwk_resources
    file_paths = Dir['./app/assets/images/wwk-*-*.*'].sort.map { |file_path| file_path[/wwk-..-.*/]}
    file_paths.each_slice(4).to_a
  end
end

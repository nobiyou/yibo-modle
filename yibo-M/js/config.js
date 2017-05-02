$(function () {
  'use strict';

  //无限滚动
    $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
      var loading = false;
      // 每次加载添加多少条目
      var itemsPerLoad = 5;
      // 最多可加载的条目
      var maxItems = 100;
      var lastIndex = $('.list-container li').length;
      function addItems(number, lastIndex) {
        // 生成新条目的HTML
        var html = '';
        for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
          html += '<li class="item-content full-list">
                                <div class="list-video">
                                    <a href="{$r[url]}" class="list-link external">
                                        <div class="content-title">{$r[title]}</div>
                                        <div class="video-mask"></div>
                                        <div class="header-pic">
                                            <div valign="bottom" class="card-header color-white no-border no-padding">
                                                <img class="card-cover" src="{thumb($r[thumb],622,350)}" alt="{$r[title]}">
                                            </div>
                                            <span class="video-btn"></span>
                                        </div>
                                        <div class="card-footer">
                                            {php $db = pc_base::load_model('hits_model');   $_r = $db->get_one(array('hitsid'=>'c-'.$modelid.'-'.$r[id])); $views = $_r[views]; }
											{php $comment_tag = pc_base::load_app_class("comment_tag", "comment"); $comment_total = $comment_tag->count(array('commentid'=>'content_'.$catid.'-'.$r[id].'-'.$modelid));}
                                            <span class="watched-times"><span>{$views}</span>次观看</span>
											<span class="message"><span class="icon iconfont icon-message"></span><span id = "sourceId::{id_encode("content_$catid",$r[id],$siteid)}" class = "cy_cmt_count" ></span></span>
                                            <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cysUW6TJ8">
</script>
                                        </div>
                                    </a>
                                </div>
                            </li>';
        }
        // 添加新条目
        $('.infinite-scroll .list-container').append(html);
      }
      $(page).on('infinite', function() {
        // 如果正在加载，则退出
        if (loading) return;
        // 设置flag
        loading = true;
        // 模拟1s的加载过程
        setTimeout(function() {
          // 重置加载flag
          loading = false;
          if (lastIndex >= maxItems) {
            // 加载完毕，则注销无限加载事件，以防不必要的加载
            $.detachInfiniteScroll($('.infinite-scroll'));
            // 删除加载提示符
            $('.infinite-scroll-preloader').remove();
            return;
          }
          addItems(itemsPerLoad,lastIndex);
          // 更新最后加载的序号
          lastIndex = $('.list-container li').length;
          $.refreshScroller();
        }, 1000);
      });
    });

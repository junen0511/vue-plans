<template>
    <div>
        <router-link v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time" class="btn btn-primary">创建</router-link>
        <div v-if="$route.path === '/time-entries/log-time'">
            <h3>新建任务</h3>
        </div>
        <hr>
        <router-view></router-view>
        <div class="time-entries">
            <p v-if="!plans.length"><strong>你还没有添加任何任务</strong></p>
            <ul class="list-group">
                <li v-for="(plan,index) in plans" class="list-group-item">
                    <div class="row">
                        <div class="col-sm-2 user-details">
                            <img v-bind:src="plan.avatar" class="avatar img-circle img-responsive" >
                            <p class="text-center">
                                <strong>{{ plan.name }}</strong>
                            </p>
                        </div>
                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-time">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ plan.totalTime }}
                            </h3>
                            <p class="label label-primary text-center">
                                <i class="glyphicon glyphicon-calendar"></i>
                                {{ plan.date }}
                            </p>
                        </div>
                        <div class="col-sm-6 comment-section">
                            <p>{{ plan.comment }}</p>
                        </div>
                        <div class="col-sm-2">
                            <router-link :to="{name:'log-time',params:{id:index}}" class="btn btn-xs btn-info">编辑</router-link>
                            <button class="btn btn-xs btn-danger delete-button" v-on:click="deletePlan(index)">x</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:'TimeEntries',
        data(){
            return {
                    plans: this.$store.state.plans
                }
        },
        methods:{
            deletePlan(index){
                this.$store.dispatch('subtractTotalTime',this.plans[index].totalTime)
                this.$store.dispatch('deletePlan',index)
            }
        }
    }
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>